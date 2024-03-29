require('custom-env').env(true)
require('./endpoints/utils/LogHandler')
const next = require('next');
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const fs = require('fs');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const i18n = require('i18next');
const FileStore = require('session-file-store')(session);
const Data = require('./controller/connect')
const LoginController = require('./controller/LoginController');
var cookieParser = require('cookie-parser')

dotenv.config();



// Inicializa o renderizador de aplicação Next
const dev = !process.env.NODE_ENV;
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {

  const server = express();
  server.use(bodyParser.json({
    limit: '2mb',
    extended: true
  }));
  server.use(bodyParser.urlencoded({
    limit: '2mb',
    extended: true
  }));

  // TODO: Definir parametros de segurança
  server.use(helmet({
    frameguard: false,
    dnsPrefetchControl: false,
    hidePoweredBy: false,
    hsts: false,
    ieNoOpen: false,
    noSniff: false,
    xssFilter: false
  }));

  // Define o horário de início da requisição
  server.use(function (req, res, next) {
    res._durationStart = Date.now();
    next();
  });
  // Parametros de configuração para iniciar a sessão
  const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: (process.env.HTTPS == 'true')
    },
    store: new FileStore({
      path: './' + (process.env.SESSION_PATH ? process.env.SESSION_PATH : '.sessions'),
      ttl: (3 * 60 * 60) // Session time to live in seconds. Defaults to 3600
    })
  }
  // Inicializa a sessão
  server.use(session(sessionConfig));
  server.use(cookieParser())
  // Define a pasta de conteúdo público
  server.use('/', express.static('public')); // do cai ham nay ne roi t out day

  // Se o protocolo do servidor estiver configurado para HTTPS
  // Faz o redirecionamento de "www" para "sem www"
  if (process.env.HTTPS == 'true') {
    server.get('/*', function (req, res, next) {
      if (req.headers.host.match(/^www/) !== null) {
        res.redirect(301, 'https://' + req.headers.host.replace(/^www\./, '') + req.url);
      } else {
        next();
      }
    })
  }

  // Função para renderizar página web no idioma informado
  const render = async function (req, res, lang, page, query) {
    if (i18n.language && i18n.language != lang) {
      await new Promise((resolve) => {
        i18n.changeLanguage(lang, resolve);
      });
    }
    return app.render(req, res, page, query);
  }

  // Endpoints para as rotas web
  server.get('/pt', async (req, res) => {
    return await render(req, res, 'pt', '/landing/home')
  })
  server.get('/pt/:slug', async (req, res) => {
    return await render(req, res, 'pt', '/landing/' + req.params.slug)
  })

  //cameramen page
  server.get('/attendance', LoginController.authLogin ,async(req, res) => {
    return await render(req,res, 'en',  '/landing/attendance')
  })

  //login page get method
  server.get('/partner', async(req, res) => {
    return await render(req,res, 'en',  '/landing/partner')
  })
  //login page post method 
  server.post('/partner', LoginController.PostLogin)

  //home page
  server.get('/', async (req, res) => {
    return await render(req, res, 'en', '/landing/home')  
  }) 

  //manage page
  server.get('/manage', LoginController.authLogin, async (req,res) => {
    return await render(req, res, 'en', '/landing/manage')
  })
  
  //sendFaceFile=
  server.get('/faceapi', async (req,res) => {
    await res.sendFile(__dirname + "/public/js/face-api.min.js")
  })
  //sendScriptAlgoth
  server.get('/recog', async (req,res) => {
    await res.sendFile(__dirname + "/public/js/face_algoth.js")
  })
  //Use router
  server.use('/data', LoginController.authLogin, Data)
  server.get('*', async (req, res) => {
    return handle(req, res)
  })

  
  
  // Obtém as portas para iniciar o servidor web
  const http_port = parseInt(process.env.HTTP_PORT, 10) || 80;
  const https_port = parseInt(process.env.HTTPS_PORT, 10) || 443;
  const host = process.env.SERVER_HOST || '127.0.0.1';

  // Se o protocolo do servidor estiver configurado para HTTPS
  if (process.env.HTTPS == 'true') {

    // Obtém os certificados configurado para o domínio
    const credentials = {
      key: fs.readFileSync(process.env.SSL_PRIVKEY_FILE, 'utf8'),
      cert: fs.readFileSync(process.env.SSL_CERT_FILE, 'utf8'),
      ca: fs.readFileSync(process.env.SSL_CHAIN_FILE, 'utf8')
    };

    // Inicia o servidor HTTP, forçando o redirecionamento das páginas para HTTPS
    const httpServer = http.createServer(function (req, res) {
      res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
      res.end();
    });
    httpServer.listen(http_port, host, () => {
      log('web.js', 'HTTP Server running on ' + host + ':' + http_port);
    });

    // Inicia o servidor HTTPS
    const httpsServer = https.createServer(credentials, server);
    httpsServer.listen(https_port, host, () => {
      log('web.js', 'HTTP Server running on ' + host + ':' + https_port);
    });

    // Sem HTTPS
  } else {

    // Inicializa o serviço na porta especificada
    server.listen(http_port, () => {
      log('web.js', 'HTTP Server running on port ' + http_port);
    });
  }
})
  .catch((ex) => {
    logError('web.js', 'NEXT Error', ex);
    process.exit(1)
  })




