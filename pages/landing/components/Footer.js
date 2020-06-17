import i18n from 'i18next'
import { Col, Row } from 'reactstrap';
import "./Footer.scss"

class Footer extends React.Component {

    handleContactUs() {
        zE('webWidget', 'open');
    }
    
    render() {
        const lang = (i18n.language == 'en' || i18n.language == 'pt') ? i18n.language : 'en';
        const langPath = (lang == 'en') ? '/' : '/' + lang + '/'

        return (
            <div className="footer">
                <Row>
                    <Col>
                        <div className="made_with">{i18n.t("landing:footer.made_with")}</div>
                        <div className="mecabots"><img src="/images/logo_mecabots_full.svg" /></div>
                        <div className="local">{i18n.t("landing:footer.local")}</div>
                        <div className="copyright">{i18n.t("landing:footer.copyright")}</div>
                    </Col>
                    <Col>
                        <div className="responsibly">
                            <p>{i18n.t("landing:footer.responsibly")}</p>
                            <div>
                                <img src="/images/mailIcon.png" />
                                <img src="/images/mailIcon.png" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="you_can_pay">
                            <p>{i18n.t("landing:footer.you_can_pay")}</p>
                            <div>
                                <img src="/images/icon_pay_paypal.png" />
                                <img src="/images/icon_pay_visa.png" />
                                <img src="/images/icon_pay_american.png" />
                                <img src="/images/icon_pay_mastercard.png" />
                                <img src="/images/icon_pay_maestro.png" />
                                <img src="/images/icon_pay_discover.png" />
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <ul className="nav_link">
                            <li><a href="https://www.youtube.com/channel/UCTD1Hj6rNjHZ8e-z8St-ZAQ">{i18n.t("landing:footer.nav_link.youtube")}</a></li>
                            <li><a href={langPath + 'team'}>{i18n.t("landing:footer.nav_link.team")}</a></li>
                            <li><a href="javascript:void(0)" onClick={() => this.handleContactUs()}>{i18n.t("landing:footer.nav_link.contact_us")}</a></li>
                            <li><a href={langPath + 'terms'}>{i18n.t("landing:footer.nav_link.terms")}</a></li>
                            <li><a href={langPath + 'privacy'}>{i18n.t("landing:footer.nav_link.privacy")}</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;
