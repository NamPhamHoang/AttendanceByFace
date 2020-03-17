import "./main.scss"
import "./privacy.scss"
import i18n from 'i18next';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';

class Privacy extends React.Component {
    render() {
        const lang = (i18n.language == 'en' || i18n.language == 'pt') ? i18n.language : 'en';

        return (
            <span>
                <div className="main">
                    <Header />
                    <Container className="box">
                        <h1 className="title">{i18n.t("landing:privacy.title")}</h1>
                        <div className="privacy_section">

                            {lang == 'en' && <div>
                                <p>Last updated: August 2019.</p>
                                <p>This Privacy Policy governs the manner in which Anny de Crypto collects, uses, maintains and discloses user information ("User") from http://www.annydecrypto.com ("Site"). This privacy policy applies to the site and all products and services offered by MECABOTS.</p>
                                <h3>Personally Identifiable Information</h3>
                                <p>We may collect personally identifiable information from Users in a variety of ways, including, but not limited to, when Users visit our site, filing an application to subscribe to the newsletter and in connection with other activities, services, resources or services. resources we make available on our site. Information requested from users may be, as appropriate: Name, email address, mailing address, telephone number, users may, however, visit our site anonymously.</p>
                                <p>We will collect personally identifiable information from Users only if Users voluntarily submit such information to us. Users may always refuse to provide personally identifiable information, except that such information may prevent them from participating in certain activities related to the Site.</p>
                                <h3>Non-Personally Identifiable Information</h3>
                                <p>We may collect non-personally identifiable information about Users whenever they interact with our Site. Non-personally identifiable information may include browser name, computer type, and technical information about your means of connecting to our Site, such as your operating system and Internet service providers, and other similar information.</p>
                                <h3>Web browser cookies</h3>
                                <p>Our site may use "cookies" to improve the user experience. The user's web browser places cookies on the hard drive for record keeping purposes and sometimes tracks information about them. You may choose to set your browser to refuse cookies or to alert you when cookies are being sent. If they do, note that some parts of the site may not function properly.</p>
                                <h3>How we use the information we collect</h3>
                                <p>Anny de Crypto collects and uses users' personal information for the following purposes:</p>
                                <ul>
                                    <li>To improve customer service</li>
                                    <li>Your information helps us respond more effectively to your service requests and support needs.</li>
                                    <li>To customize user experience</li>
                                    <li>We may use the information together to understand how our users, as a group, use the services and features provided on our site.</li>
                                    <li>To improve our site</li>
                                    <li>We continually strive to improve our offerings based on the information and feedback we receive from you.</li>
                                    <li>To process transactions</li>
                                    <li>We may use the information provided by users when placing an order solely to provide services to that order. We do not share this information with third parties except as necessary to provide the service.</li>
                                    <li>To send periodic emails</li>
                                    <li>The email address users provide for order processing will only be used to send information and updates related to their order. It can also be used to answer your questions and / or other requests. If you choose to accept our mailing list, you will receive emails that may include news, updates, product or service related information, etc. If at any time you wish to unsubscribe from future emails, we will include instructions on how to unsubscribe at the bottom of each email or you may contact us via our website.</li>
                                </ul>
                                <h3>How we protect your information</h3>
                                <p>We have adopted appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
                                <p>The exchange of confidential data between the Site and its Users takes place via a secure SSL encrypted communication channel protected with digital signatures.</p>
                                <h3>Third Party Sites</h3>
                                <p>Users may find advertising or other content on our site that links to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by the linked sites from our site. Additionally, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Navigation and interaction on any other site, including sites that link to our Site, is subject to the site's own terms and policies.</p>
                                <h3>Advertising</h3>
                                <p>Ads appearing on our site may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they submit an online advertisement to compile non-personally identifiable information about you or others who use your computer. This information allows ad networks to deliver, among other things, targeted ads that they think are of most interest to you. This privacy policy does not cover the use of cookies by any advertiser.</p>
                                <h3>Changes to this privacy policy</h3>
                                <p>Anny de Crypto has the power to update this privacy policy at any time. When we do, review the updated date at the bottom of this page. We encourage Users to frequently check this page for changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to periodically review this privacy policy and to be aware of any modifications.</p>
                                <h3>Your acceptance of these terms</h3>
                                <p>By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
                                <h3>Contacting us</h3>
                                <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
                                <p>annydecrypto.com<br />
                                    Amsterdam<br />
                                    support@annydecrypto.com
                                </p>
                            </div>}

                            {lang == 'pt' && <div>
                                <p>Última atualização: Agosto de 2019.</p>
                                <p>Esta Política de Privacidade rege a maneira pela qual o Anny de Crypto  coleta, usa, mantém e divulga informações de usuários ("Usuário") do site http://www.annydecrypto.com ("Site"). Esta política de privacidade aplica-se ao site e a todos os produtos e serviços oferecidos pela MECABOTS.</p>
                                <h3>Informação de identificação pessoal</h3>
                                <p>Podemos coletar informações de identificação pessoal dos Usuários de várias formas, incluindo, mas não se limitando a, quando os Usuários visitam nosso site, registrar no site um pedido de inscrição para assinar o boletim informativo e em conexão com outras atividades, serviços, recursos ou recursos que disponibilizamos em nosso site. As informações solicitadas aos usuários podem ser, conforme o caso: Nome, endereço de e-mail, endereço para correspondência, número de telefone, usuários podem, no entanto, visitar nosso site anonimamente.</p>
                                <p>Coletaremos informações de identificação pessoal dos Usuários somente se elas voluntariamente nos enviarem essas informações. Os usuários podem sempre se recusar a fornecer informações de identificação pessoal, exceto que essas informações possam impedi-los de participar de certas atividades relacionadas ao Site.</p>
                                <h3>Informação de identificação não pessoal</h3>
                                <p>Podemos coletar informações de identificação não pessoais sobre os Usuários sempre que eles interagem com nosso Site. As informações de identificação não pessoal podem incluir o nome do navegador, o tipo de computador e informações técnicas sobre os meios de conexão do Usuário ao nosso Site, como o sistema operacional e os provedores de serviços de Internet utilizados e outras informações semelhantes.</p>
                                <h3>Cookies do navegador da Web</h3>
                                <p>Nosso site pode usar "cookies" para melhorar a experiência do usuário. O navegador da Web do usuário coloca cookies no disco rígido para fins de manutenção de registros e, às vezes, rastreia informações sobre eles. O usuário pode optar por configurar seu navegador para recusar cookies ou para alertá-lo quando os cookies estiverem sendo enviados. Se o fizerem, observe que algumas partes do site podem não funcionar corretamente.</p>
                                <h3>Como usamos as informações coletadas</h3>
                                <p>O Anny de Crypto coleta e usa informações pessoais dos usuários para as seguintes finalidades:</p>
                                <ul>
                                    <li>Para melhorar o atendimento ao cliente</li>
                                    <li>Suas informações nos ajudam a responder com mais eficácia às suas solicitações de atendimento e às necessidades de suporte.</li>
                                    <li>Para personalizar a experiência do usuário</li>
                                    <li>Podemos usar as informações em conjunto, para entender como nossos usuários, como grupo, usam os serviços e recursos fornecidos em nosso site.</li>
                                    <li>Para melhorar nosso site</li>
                                    <li>Nós nos esforçamos continuamente para melhorar nossas ofertas, com base nas informações e comentários que recebemos de você.</li>
                                    <li>Para processar transações</li>
                                    <li>Podemos usar as informações fornecidas pelos usuários, quando fizerem um pedido apenas para fornecer serviços a esse pedido. Nós não compartilhamos esta informação com terceiros, exceto quando necessário para fornecer o serviço.</li>
                                    <li>Para enviar e-mails periódicos</li>
                                    <li>O endereço de e-mail que os usuários fornecem para processamento de pedidos será usado apenas para enviar informações e atualizações relacionadas ao seu pedido. Também pode ser usado para responder às suas perguntas e / ou outras solicitações. Se o usuário optar por aceitar nossa lista de e-mails, receberá e-mails que podem incluir notícias, atualizações, informações relacionadas a produtos ou serviços, etc. Se, a qualquer momento, o usuário desejar cancelar a assinatura de futuros e-mails, incluiremos instruções de como cancelar a sua inscrição, na parte inferior de cada e-mail ou o usuário pode entrar em contato conosco através do nosso site.</li>
                                </ul>
                                <h3>Como protegemos suas informações</h3>
                                <p>Adotamos práticas adequadas de coleta, armazenamento e processamento de dados e medidas de segurança para proteger contra acesso não autorizado, alteração, divulgação ou destruição de suas informações pessoais, nome de usuário, senha, informações de transações e dados armazenados em nosso Site.</p>
                                <p>A troca de dados confidenciais entre o Site e seus Usuários acontece através de um canal de comunicação seguro SSL, criptografado e protegido com assinaturas digitais.</p>
                                <h3>Sites de terceiros</h3>
                                <p>Os usuários podem encontrar publicidade ou outro conteúdo em nosso site que tenha links para os sites e serviços de nossos parceiros, fornecedores, anunciantes, patrocinadores, licenciadores e outros terceiros. Nós não controlamos o conteúdo ou os links que aparecem nesses sites e não somos responsáveis ​​pelas práticas empregadas pelos sites vinculados a partir do nosso site. Além disso, esses sites ou serviços, incluindo seu conteúdo e links, podem estar mudando constantemente. Esses sites e serviços podem ter suas próprias políticas de privacidade e políticas de atendimento ao cliente. A navegação e interação em qualquer outro site, incluindo sites que tenham um link para o nosso Site, está sujeita aos termos e políticas do próprio site.</p>
                                <h3>Propaganda</h3>
                                <p>Os anúncios que aparecem em nosso site podem ser entregues aos usuários por parceiros de publicidade, que podem definir cookies. Esses cookies permitem que o servidor de anúncios reconheça seu computador cada vez que eles enviam um anúncio on-line para compilar informações de identificação não pessoal sobre você ou outras pessoas que usam seu computador. Essas informações permitem que as redes de anúncios forneçam, entre outras coisas, anúncios direcionados que acreditam ser de maior interesse para você. Esta política de privacidade não cobre o uso de cookies por nenhum anunciante.</p>
                                <h3>Alterações a esta política de privacidade</h3>
                                <p>O Anny de Crypto tem o poder de atualizar esta política de privacidade a qualquer momento. Quando o fizermos, revise a data atualizada na parte inferior desta página. Encorajamos os Usuários a verificar com frequência esta página em busca de alterações para se manterem informados sobre como estamos ajudando a proteger as informações pessoais que coletamos. Você reconhece e concorda que é sua responsabilidade rever esta política de privacidade periodicamente e tomar conhecimento das modificações.</p>
                                <h3>Sua aceitação destes termos</h3>
                                <p>Ao utilizar este Site, você indica sua aceitação desta política e termos de serviço. Se você não concorda com esta política, por favor não use nosso site. Seu uso continuado do Site após a publicação de alterações a essa política será considerado sua aceitação dessas alterações.</p>
                                <h3>Entrando em contato conosco</h3>
                                <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, as práticas deste site, ou suas relações com este site, entre em contato conosco em:</p>
                                <p>annydecrypto.com<br />
                                    Rua Doutor Silva Mendes, 855<br />
                                    Campinas/SP<br />
                                    Brasil<br />
                                    suporte@annydecrypto.com<br />
                                    Tel: +5519991145318
                                </p>
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

export default Privacy