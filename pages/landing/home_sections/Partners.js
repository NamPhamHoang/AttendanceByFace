import i18n from 'i18next';
import { Col, Row } from 'reactstrap';
import "./Partners.scss";

class Partners extends React.Component {
    render() {
        return (
            <div id="signals" className="partners_section" ref={this.refB}>
                <Row>
                    <Col>
                        <h3>{i18n.t("landing:mainpage.partners.title")}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="caroussel">
                        <div className="partners_container">
                            <div className="partner_box">
                                <div className="tag_soon">{i18n.t("landing:mainpage.partners.label_premium")}</div>
                                <a href="https://cryptoinvestidor.net" target="_blank"><div className="inner_box"><img src="/images/partner_logo_crypto_investidor.png" alt="Partner Crypto Investidor" /></div></a>
                                <div className="partner_name"><a href="https://cryptoinvestidor.net" target="_blank">{i18n.t("landing:mainpage.partners.label_partner1")}</a></div>
                            </div>
                            <div className="partner_box">
                                <div className="tag_soon">{i18n.t("landing:mainpage.partners.label_premium")}</div>
                                <a href="https://t.me/QualitySignalsChannel" target="_blank"><div className="inner_box"><img src="/images/partner_logo_quality_signals.png" /></div></a>
                                <div className="partner_name"><a href="https://t.me/QualitySignalsChannel" target="_blank">{i18n.t("landing:mainpage.partners.label_partner4")}</a></div>
                            </div>
                            <div className="partner_box">
                                <div className="tag_soon">{i18n.t("landing:mainpage.partners.label_premium")}</div>
                                <a href="https://batsinais.top/" target="_blank"><div className="inner_box"><img src="/images/partner_logo_batsinais.jpg" /></div></a>
                                <div className="partner_name"><a href="https://batsinais.top/" target="_blank">{i18n.t("landing:mainpage.partners.label_partner6")}</a></div>
                            </div>
                            <div className="partner_box">
                                <a href="https://t.me/CryptoCoinCoach" target="_blank"><div className="inner_box"><img src="/images/partner_logo_crypto_coin_coach.jpg" alt="Partner Crypto Coin Coach" /></div></a>
                                <div className="partner_name"><a href="https://t.me/CryptoCoinCoach" target="_blank">{i18n.t("landing:mainpage.partners.label_partner2")}</a></div>
                            </div>
                            <div className="partner_box">
                                <a href="https://t.me/cryptodrivers" target="_blank"><div className="inner_box"><img src="/images/partner_logo_crypto_drivers.png" /></div></a>
                                <div className="partner_name"><a href="https://t.me/cryptodrivers" target="_blank">{i18n.t("landing:mainpage.partners.label_partner5")}</a></div>
                            </div>
                            <div className="partner_box">
                            <a href="https://t.me/CryptoTrades" target="_blank"><div className="inner_box"><img src="/images/partner_logo_crypto_trades.jpg" /></div></a>
                            <div className="partner_name"><a href="https://t.me/CryptoTrades" target="_blank">{i18n.t("landing:mainpage.partners.label_partner7")}</a></div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Partners;
