import "./main.scss"
import "./terms.scss"
import i18n from 'i18next';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';

class Terms extends React.Component {
    render() {
        const lang = (i18n.language == 'en' || i18n.language == 'pt') ? i18n.language : 'en';

        return (
            <span>
                <div className="main">
                    <Header />
                    <Container className="box">
                        <h1 className="title">{i18n.t("landing:terms.title")}</h1>
                        <div className="terms_section">

                            {lang == 'en' && <div>
                                <p>Version / Last updated: August 2019.</p>
                                <p>Welcome to Anny de Crypto. We offer online software as a service (SaaS) through our website https://www.annydecrypto.com (the “Site”). Our software (“Software”) allows you to trade and invest in cryptocurrencies through an automated cryptocurrency trading robot (“bot”), which you have full control over and can configure as you wish or best suit you. suit.</p>
                                <p>These terms and conditions (the “Terms”) apply to the relationship between Anny de Crypto and you for any use of the Website and the Software Anny de Crypto offers. You may not use the Software without accepting these Terms.</p>
                                <h3>Definitions</h3>
                                <p>Anny de Crypto: It is a product developed and licensed by MECABOTS, a company incorporated under the laws of Netherland, under XXXXXXX. Anny de Crypto is also referred to as "we".</p>
                                <p>User(s): Individual private person (s) or legal entity that makes use of the Site or Software. Users are also referred to as "you".</p>
                                <p>Software: Technology system designed to allow users to place orders to buy and sell cryptocurrencies, but several platforms (Exchanges) in the active crypto market through Robot. The Software is available at https://www.annydecrypto.com.</p>
                                <p>Signals: Information provided by outside consultants who examine the cryptocurrency market and provide users with trading signals and tactics. Users have the option to configure the Software in such a way that it will automatically buy and sell cryptocurrencies based on Signal information.</p>
                                <h3>Registration and personal account</h3>
                                <p>If you would like to use our website and software, please visit: https://www.annydecrypto.com. You will need to register and create a personal account to use the site and the software.</p>
                                <p>You must protect your account login details and keep your password strictly secret. We will assume that all actions taken on your account are done by you or under your supervision.</p>
                                <p>You agree to provide updated, complete and accurate information about your account. You agree to promptly update your personal account as necessary, so that we may contact you if necessary.</p>
                                <h3>Offers and Prices</h3>
                                <p>All offers and free trials on the website are voluntary. However, as long as free offers and trials are conducted, they are always subject to these Terms.</p>
                                <p>Prices on the site do not include taxes and expenses.</p>
                                <p>We can always adjust our prices. The price change will take effect immediately.</p>
                                <h3>Subscription and Payment</h3>
                                <p>You need a subscription to use the site and the software. Subscriptions are offered for a fixed amount per month and / or per year. You can get a subscription at https://www.annydecrypto.com.</p>
                                <p><b>Anny de Crypto offers various types of packages as a subscription. Each package differs in the number of positions, currencies selected, frequency of stock market scanning and the amount of Anny de Crypto support. You can find all packages at https://www.annydecrypto.com/#pricing.</b></p>
                                <p>Anny de Crypto will give the user access to the software immediately after the subscription is completed. You may use and configure various signals within the Software based on a subscription.</p>
                                <p>The subscription price will be billed automatically each month. Possible payment methods appear on the site and include, for example, PayPal, credit cards (eg, Visa or MasterCard) and cryptocurrencies.</p>
                                <p>A monthly subscription will be made on a recurring basis and will continue for a month-to-month period unless the User cancels the subscription before the end of the paid period.</p>
                                <p>An annual subscription will be automatically extended upon expiration for the same period unless the User cancels the subscription before the expiration of the paid period. (Check if we will have annual subscription).</p>
                                <p>The user can cancel the subscription until the end of the term already paid. The user account will remain active for the period the user has already paid.</p>
                                <h3>Fair use of our website and software</h3>
                                <p>By using our site and software, you represent that you are at least 18 years old.</p>
                                <p>You may not use the site and the software in such a way that you violate Dutch law or any other applicable laws and regulations.</p>
                                <p>As a condition of using the Site and the Software, you agree not to provide any information, data or content to us or to the Website and Software that is incorrect, inaccurate, incomplete or in violation of any law or regulation. In addition, you agree that you will not allow third parties to:</p>
                                <ol>
                                    <li>enter any non-public / secure area of ​​the site or software;</li>
                                    <li>send viruses, worms, junk mail, spam, chains, unsolicited offers or advertisements of any kind and for any purpose;</li>
                                    <li>investigate, scan or test the Software Website or any other related system or network, or breach any security or authentication;</li>
                                    <li>use any automated software system to screen data from the site ("screen-scraping");</li>
                                    <li>make and distribute copies of the website or software;</li>
                                    <li>attempt to sell, distribute, copy, rent, sublicense, loan, merge, reproduce, alter, modify, reverse engineer, disassemble, decompile, transfer, trade, translate, hack, distribute, damage or misuse the website or the software;</li>
                                    <li>or create derivative works of any kind.</li>
                                </ol>
                                <p>You cannot create an account with someone else's name or act like someone else in any other way.</p>
                                <p>If the account concerns a corporate account, only your legal representative may negotiate with the corporate account. It is the responsibility of the corporate account user that only authorized persons have access to the account.</p>
                                <p>If you receive personal data or other sensitive information from other users, you will keep that information secret.</p>
                                <p>Anny de Crypto has the right (temporarily or permanently) to block your account and deny you access to the site if we suspect account or site abuse. We may also block your account or deny access to the platform if you do not comply with these Terms, including the conditions and policies mentioned herein.</p>
                                <h3>Privacy</h3>
                                <p>Anny de Crypto respects your privacy and anticipates the General Data Protection Regulation (GDPR). When you make use of our website and software, we collect certain personal data from you. In our Privacy Policy, you can read what personal data we collect and for what purposes. You can find our privacy policy here: https://www.annydecrypto.com/privacity.</p>
                                <h3>Intellectual property</h3>
                                <p>de Crypto is licensed and exclusive of all intellectual property rights acquired and related to (all content made available through the Site) and the Software, such as - but not limited to - patents, patent applications, trademarks, trademark applications, trademarks, database rights trademarks, trade names, copyrights, trade secrets, licenses, domain names, know-how, property rights and processes (“Intellectual Property Rights”).</p>
                                <p>Anny de Crypto grants its Users a non-transferable, non-exclusive, revocable license intended for the fair use of the Site and the Software on a subscription basis as offered by us at https://www.annydecrypto.com. You are not permitted to access site and software content for any other purpose, such as selling or distributing site and software content.</p>
                                <h3>Website and software availability and disclaimer of warranties</h3>
                                <p>The site and software are available on desktop and portable mobile devices running iOS and Android. Anny de Crypto will use reasonable efforts to make the Website and the Software available at all times. However, you acknowledge that the site and the software are provided over the Internet and mobile networks and therefore the quality and availability of the site and the software may be affected by factors beyond Anny de Crypto's reasonable control.</p>
                                <p>Anny de Crypto accepts no responsibility for the unavailability of the Website and Software, or any difficulty or inability to download or access content, or any other communication system failure that may result in the unavailability of the Website or Software.</p>
                                <p>Anny de Crypto is not responsible for any support or maintenance related to the site or software. Anny de Crypto may, in its sole discretion, update, modify or adapt the Website or Software and its features from time to time to enhance the user experience. Anny de Crypto is not responsible for any downtime resulting from these actions.</p>
                                <h3>Helpdesk</h3>
                                <p>Anny de Crypto has a helpdesk where the user can ask questions about the site and software. Anny de Crypto will only give advice on how the site and software work.</p>
                                <h3>Personal / Financial Investment Advice &amp; Legal Notice</h3>
                                <p>Anny de Crypto doesn't explicitly:</p>
                                <p>These are investment banks, brokerages, value analysts or independent investment agents.</p>
                                <p>Provides users with any personal financial advice.</p>
                                <p>Provides users with any personal advice on recommended signal settings;</p>
                                <p>Anny de Crypto can upload general tutorials and videos on the site, about its operation and the software.</p>
                                <p>All tutorials, videos and templates submitted by Anny de Crypto are general and do not contain personal and / or financial advice. All use of these notices is at the user's sole risk.</p>
                                <p>User can connect his Anny de Crypto to a group of signals. The signals are not provided by Anny de Crypto, but by external consultants. The use of signs is at the sole risk of the user.</p>
                                <h3>Risks</h3>
                                <p>The user is aware of the associated risks of owning, trading and using cryptocurrencies and assumes full responsibility for those risks.</p>
                                <h3>Responsibility</h3>
                                <p>Anny de Crypto is not responsible for any damage (direct or indirect) you suffer as a result of using the Website or Software or the content provided. For example, Anny de Crypto is not responsible for:</p>
                                <ul>
                                    <li>the proper functioning of (hyper) links provided by the website or software;</li>
                                    <li>the quality of any template containing signal configurations provided by Users on the Site;</li>
                                    <li>the (lack of) financial benefit to Users through the use of the Site or Software;</li>
                                    <li>any situation in which the user's mobile device, login details and / or password are stolen and any third party subsequently makes use of the website or software without the user's consent;</li>
                                    <li>any damage or alteration to Your equipment, including, but not limited to, computer equipment or portable device as a result of the installation or use of the Site or Software;</li>
                                    <li>failure to comply with any obligation of Anny de Crypto under these Terms where such failure is due to events beyond Anny de Crypto's reasonable control.</li>
                                </ul>
                                <h3>Indemnity</h3>
                                <p>Users will indemnify, defend and hold Anny de Crypto to and against all liability, damages and costs (including settlement costs and reasonable attorney's fees) arising from third party claims regarding:</p>
                                <p>any damage or damage resulting from Your behavior related to your use of our Site and Software; and</p>
                                <p>Your violation of these Terms or your violation of any applicable law, regulation or order.</p>
                                <h3>Several</h3>
                                <p>Anny de Crypto reserves the right to change these Terms. When we change these Terms significantly, we will notify Users by newsletter (if the User has provided us with their email address for this purpose) and post a notice on our Site, along with the updated Terms. By continuing to use the site, you acknowledge the latest version of these Terms.</p>
                                <p>If we do not enforce (parts of) these Terms, this cannot be construed as consenting or waiving the right to enforce them at a later time or against another User.</p>
                                <p>You may not transfer the rights and obligations of these Terms to third parties.</p>
                                <p>Complaints, comments and suggestions</p>
                                <p>Anny de Crypto strives to provide great service. If you have a complaint, comment or suggestion, you can contact us at support@annydecrypto.com. Please give us your contact details and a clear description and reason for your complaint. Complaints are usually processed within 7 business days.</p>
                                <p>MECABOTS.</p>
                            </div>}

                            {lang == 'pt' && <div>
                                <p>Versão / Última atualização: Agosto 2019.</p>
                                <p>Bem-vindo a Anny de Crypto. Oferecemos software on-line como serviço (SaaS) através do nosso site https://www.annydecrypto.com (o “Site”). Nosso software (“Software”) permite que você negocie e invista em criptomoedas, por meio de um robô ("bot") negociador automático de criptomoedas, o qual você tem o total controle e pode configurá-lo da forma que desejar ou melhor lhe convir.</p>
                                <p>Estes termos e condições (os “Termos”) se aplicam ao relacionamento entre o Anny de Crypto e você por qualquer uso do Website e do Software que a Anny de Crypto oferece. Você não pode usar o Software sem aceitar estes Termos.</p>
                                <h3>Definições</h3>
                                <p>Anny de Crypto: É um produto desenvolvido e licenciado pela MECABOTS, uma sociedade constituída sob as leis da Holanda, Anny de Crypto também é referido como "nós". </p>
                                <p>Usuário(s): pessoa(s) privada (s) individual (is) ou pessoa jurídica que faz uso do Site ou Software. Os usuários também são referidos como "você".</p>
                                <p>Software: Sistema de tecnologia desenvolvido para permitir que os usuários realizem ordens de compra e vendas de criptomoedas, mas diversas plataformas (Exchanges) no mercado de cripto ativos, através de Robô. O Software está disponível no site https://www.annydecrypto.com.</p>
                                <p>Sinais: informações fornecidas por consultores externos que examinam o mercado de criptomoedas e fornecem aos usuários sinais e táticas de negociação. Os usuários têm a opção de configurar o Software de tal forma que ele comprará e venderá criptomoedas automaticamente com base nas informações dos Sinais.</p>
                                <h3>Registro e conta pessoal</h3>
                                <p>Se você quiser usar nosso site e software, acesse: https://www.annydecrypto.com. Você precisará se registrar e criar uma conta pessoal para usar o site e o software.</p>
                                <p>Você deve proteger os detalhes de login da sua conta e manter sua senha estritamente secreta. Assumiremos que todas as ações realizadas em sua conta, são feitas por você ou sob sua supervisão.</p>
                                <p>Você concorda em fornecer informações atualizadas, completas e precisas sobre sua conta. Você concorda em atualizar prontamente sua conta pessoal quando necessário, para que possamos entrar em contato, caso necessário.</p>
                                <h3>Ofertas e preços</h3>
                                <p>Todas as ofertas e testes gratuitos no website são voluntários. No entanto, a partir do momento que ofertas e testes gratuitos são realizados, estão sempre sujeitos a estes Termos.</p>
                                <p>Os preços no site não incluem impostos e despesas.</p>
                                <p>Podemos sempre ajustar nossos preços. A alteração de preço entrará em vigor imediatamente.</p>
                                <h3>Assinatura e pagamento</h3>
                                <p>Você precisa de uma assinatura para usar o site e o software. As assinaturas são oferecidas por um valor fixo por mês e / ou por ano. Você pode obter uma assinatura em https://www.annydecrypto.com.</p>
                                <p><b>A Anny de Crypto oferece vários tipos de pacotes como assinatura. Cada pacote difere na quantidade de posições, moedas selecionadas, frequência de digitalização do mercado de ações e a quantidade de suporte do Anny de Crypto. Você pode encontrar todos os pacotes em https://www.annydecrypto.com/#pricing.</b></p>
                                <p>O Anny de Crypto dará ao usuário acesso ao software imediatamente após a assinatura ser concluída. O usuário pode usar e configurar vários sinais dentro do Software com base em uma assinatura.</p>
                                <p>O preço da assinatura será faturado automaticamente a cada mês. Os possíveis métodos de pagamento são exibidos no site e incluem, por exemplo, PayPal, cartões de crédito (por exemplo, Visa ou MasterCard) e criptomoedas.</p>
                                <p>Uma assinatura mensal será feita de forma recorrente e continuará por período de mês a mês, a menos que o Usuário cancele a assinatura antes do término do período já pago.</p>
                                <p>Uma assinatura anual será automaticamente estendida após o vencimento, por igual período, a menos que o Usuário cancele a assinatura antes do término do prazo já pago. (Verificar se teremos assinatura anual).</p>
                                <p>O usuário pode cancelar a assinatura até o final do término do prazo já pago. A conta do usuário permanecerá ativa pelo período que o usuário já pagou.</p>
                                <h3>Uso justo do nosso site e software</h3>
                                <p>Ao usar nosso site e software, você declara ter pelo menos 18 anos de idade.</p>
                                <p>Você não pode usar o site e o software de tal maneira que você viole a lei Holandesa ou quaisquer outras leis e regulamentos aplicáveis.</p>
                                <p>Como condição para usar o Site e o Software, você concorda em não fornecer quaisquer informações, dados ou conteúdo para nós ou para o Website e Software incorretos, imprecisos, incompletos ou que violem qualquer lei ou regulamento. Além disso, você concorda que não permitirá a terceiros:</p>
                                <ol>
                                    <li>entrar em qualquer área não pública / segura do site ou software;</li>
                                    <li>enviar vírus, worms, lixo eletrônico, spam, correntes, ofertas não solicitadas ou anúncios de qualquer tipo e para qualquer finalidade;</li>
                                    <li>investigar, digitalizar ou testar o Website de Software ou qualquer outro sistema ou rede relacionado, ou violar qualquer segurança ou autenticação;</li>
                                    <li>usar qualquer sistema automatizado de software para retirar dados do site ("screen-scraping");</li>
                                    <li>fazer e distribuir cópias do site ou software;</li>
                                    <li>tentar vender, distribuir, copiar, alugar, sublicenciar, emprestar, mesclar, reproduzir, alterar, modificar, fazer engenharia reversa, desmontar, descompilar, transferir, trocar, traduzir, hackear, distribuir, danificar ou usar indevidamente o site ou o software;</li>
                                    <li>ou criar trabalhos derivados de qualquer tipo.</li>
                                </ol>
                                <p>Você não pode criar uma conta com o nome de outra pessoa ou agir como outra pessoa de qualquer outra forma.</p>
                                <p>Caso a conta diga respeito a uma conta corporativa, somente seu representante legal, pode negociar com a conta corporativa. É de responsabilidade do usuário da conta corporativa que apenas pessoas autorizadas tenham acesso à conta.</p>
                                <p>Se você receber dados pessoais ou outras informações confidenciais de outros usuários, manterá essas informações em segredo.</p>
                                <p>O Anny de Crypto tem o direito de (temporária ou permanentemente) bloquear sua conta e negar-lhe acesso ao site, se suspeitarmos do abuso da conta ou do site. Também podemos bloquear sua conta ou negar o acesso à plataforma se você não estiver em conformidade com estes Termos, incluindo as condições e políticas aqui mencionadas.</p>
                                <h3>Privacidade</h3>
                                <p>O Anny de Crypto respeita a sua privacidade e antecipa o Regulamento Geral de Proteção de Dados (RGPD). Quando você faz uso de nosso site e software, nós coletamos certos dados pessoais de você. Em nossa Política de Privacidade, você pode ler quais dados pessoais coletamos e com quais objetivos. Você pode encontrar nossa política de privacidade aqui: https://www.annydearipto.com/privacidade.</p>
                                <h3>Propriedade intelectual</h3>
                                <p>Anny de Crypto é licenciado e exclusivo de todos os direitos de propriedade intelectual adquiridos e relacionados a (todo o conteúdo disponibilizado através do Site) e do Software, tais como - mas não limitado a - patentes, pedidos de patentes, marcas comerciais, aplicações de marcas, direitos de banco de dados marcas, nomes comerciais, direitos autorais, segredos comerciais, licenças, nomes de domínio, know-how, direitos de propriedade e processos (“Direitos de Propriedade Intelectual”).</p>
                                <p>A Anny de Crypto concede aos seus Usuários uma licença não transferível, não exclusiva e revogável, destinada ao uso justo do Site e do Software na base de assinatura, conforme oferecido por nós em https://www.annydecrypto.com. Você não tem permissão para acessar o conteúdo do site e do software para qualquer outra finalidade, como vender ou distribuir o conteúdo do site e do software.</p>
                                <h3>Disponibilidade do site e software e isenção de garantias</h3>
                                <p>O site e o software estão disponíveis em computadores e dispositivos móveis portáteis com iOS e Android. A Anny de Crypto utilizará esforços razoáveis ​​para disponibilizar o Website e o Software em todos os momentos. No entanto, o usuário reconhece que o site e o software são fornecidos pela Internet e redes móveis e, portanto, a qualidade e a disponibilidade do site e do software podem ser afetadas por fatores fora do controle razoável da Anny de Crypto.</p>
                                <p>A Anny de Crypto não aceita qualquer responsabilidade pela indisponibilidade do Site e Software, ou qualquer dificuldade ou incapacidade de baixar ou acessar conteúdo, ou qualquer outra falha no sistema de comunicação que possa resultar na indisponibilidade do Website ou Software.</p>
                                <p>O Anny de Crypto não é responsável por qualquer suporte ou manutenção em relação ao site ou software. O Anny de Crypto pode, a seu próprio critério, atualizar, modificar ou adaptar o Website ou Software e suas funcionalidades de tempos em tempos para melhorar a experiência do usuário. O Anny de Crypto não é responsável por nenhum tempo de inatividade resultante dessas ações.</p>
                                <h3>Helpdesk</h3>
                                <p>Anny de Crypto tem um helpdesk onde o usuário pode fazer perguntas sobre o site e software. O Anny de Crypto apenas dará conselhos sobre o funcionamento do site e do software.</p>
                                <h3>Aconselhamento pessoal / financeiro para investimentos e aviso legal</h3>
                                <p>O Anny de Crypto explicitamente não:</p>
                                <p>Trata-se de banco de investimento, corretora de valor, analista de valor ou agente autônomo de investimento.</p>
                                <p>Fornece aos usuários qualquer aconselhamento financeiro pessoal.</p>
                                <p>Fornece aos usuários qualquer conselho pessoal sobre as configurações recomendadas para os sinais;</p>
                                <p>O Anny de Crypto pode fazer upload de tutoriais gerais e vídeos no site, sobre o seu funcionamento e do software.</p>
                                <p>Todos os tutoriais, vídeos e modelos enviados pelo Anny de Crypto são gerais e não contêm aconselhamento pessoal e / ou financeiro. Todo o uso desses avisos é de risco exclusivo do usuário.</p>
                                <p>O usuário pode conectar a sua Anny de Crypto a um grupo de sinais. Os sinais não são fornecidos pelo Anny de Crypto, mas sim por consultores externos. O uso de sinais é de risco exclusivo do usuário.</p>
                                <h3>Riscos</h3>
                                <p>O usuário está ciente dos riscos associados de possuir, comercializar e usar criptomoedas e assume total responsabilidade por esses riscos.</p>
                                <h3>Responsabilidade</h3>
                                <p>A Anny de Crypto não é responsável por qualquer dano (direto ou indireto) que você sofra como resultado do uso do Website ou Software ou do conteúdo fornecido. Por exemplo, a Anny de Crypto não se responsabiliza por:</p>
                                <ul>
                                    <li>o funcionamento adequado de (hyper) links fornecidos pelo site ou software;</li>
                                    <li>a qualidade de qualquer modelo que contenha configurações dos sinais, fornecidas pelos Usuários no Site;</li>
                                    <li>a (falta de) benefício financeiro para os Usuários através do uso do Site ou Software;</li>
                                    <li>qualquer situação em que o dispositivo móvel do usuário, detalhes de login e / ou senha sejam roubados e qualquer terceiro subseqüentemente faça uso do site ou do software sem o consentimento do usuário;</li>
                                    <li>qualquer dano ou alteração ao equipamento do Usuário, incluindo, mas não limitado a, equipamento de computador ou dispositivo portátil como resultado da instalação ou uso do Site ou Software;</li>
                                    <li>falha em cumprir qualquer obrigação da Anny de Crypto sob estes Termos onde tal falha é devido a eventos além do controle razoável da Anny de Crypto.</li>
                                </ul>
                                <h3>Indenização</h3>
                                <p>Os usuários irão indenizar, defender e isentar a Anny de Crypto de e contra todas as responsabilidades, danos e custos (incluindo custos de liquidação e honorários advocatícios razoáveis) decorrentes de reclamações de terceiros sobre:</p>
                                <p>qualquer dano ou dano resultante do comportamento do Usuário relacionado ao uso de nosso Site e Software; e</p>
                                <p>violação pelo usuário destes Termos ou violação de qualquer lei, regulamento ou pedido aplicável.</p>
                                <h3>Diversos</h3>
                                <p>A Anny de Crypto reserva-se o direito de alterar estes Termos. Quando alterarmos estes Termos de forma significativa, notificaremos os Usuários por boletim informativo (se o Usuário nos tiver fornecido seu endereço de e-mail para esse fim) e publicaremos uma notificação em nosso Site, juntamente com os Termos atualizados. Ao continuar a usar o site, você reconhece a versão mais recente destes Termos.</p>
                                <p>Se não aplicarmos (partes de) estes Termos, isso não pode ser interpretado como consentimento ou renúncia do direito de aplicá-los em um momento posterior ou contra outro Usuário.</p>
                                <p>O usuário não pode transferir os direitos e obrigações destes Termos para terceiros.</p>
                                <h3>Reclamações, comentários e sugestões</h3>
                                <p>A Anny de Crypto se esforça para oferecer um ótimo serviço. Se tiver uma reclamação, comentário ou sugestão, pode contactar-nos através do e-mail suporte@annydecrypto.com. Por favor, indique-nos os seus dados de contato e uma descrição e um motivo claros para a sua reclamação. As reclamações são geralmente processadas dentro de 7 dias úteis.</p>
                                <p>MECABOTS.</p>
                            </div>}

                        </div>
                    </Container>
                    <div className="separator"></div>
                </div>
                <Footer />
            </span>
        )
    }
}

export default Terms