import i18n from 'i18next';
import { Container, Col, Row } from 'reactstrap';
import "./Indispensable.scss";

class Indispensable extends React.Component {
    render() {
        return (
            <Container>
                <div className="indispensable_section">
                    <Row>
                        <Col>
                            <h2>{i18n.t("landing:mainpage.indispensable.title")}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="center">
                            <div className="icon autoBuy"><img src="/images/icon_auto_buy.svg" alt="The auto buy feature" /></div>
                            <h3>{i18n.t("landing:mainpage.indispensable.label_auto_buy")}</h3>
                            <p>{i18n.t("landing:mainpage.indispensable.label_description_auto_buy")}</p>
                        </Col>
                        <Col className="center">
                            <div className="icon autoSell" style={{ paddingTop: "32px" }}><img src="/images/icon_auto_sell.svg" alt="The auto sell feature" /></div>
                            <h3>{i18n.t("landing:mainpage.indispensable.label_auto_sell")}</h3>
                            <p>{i18n.t("landing:mainpage.indispensable.label_description_auto_sell")}</p>
                        </Col>
                        <Col className="center">
                            <div className="icon autoStop" style={{ paddingLeft: "28px" }}><img src="/images/icon_auto_stop_loss.svg" alt="The auto stop loss feature" /></div>
                            <h3>{i18n.t("landing:mainpage.indispensable.label_auto_stop_loss")}</h3>
                            <p>{i18n.t("landing:mainpage.indispensable.label_description_auto_stop_loss")}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="center">
                            <div className="icon"><img src="/images/icon_trailing_stop_loss.svg" alt="The trailing stop loss and take profit feature" /></div>
                            <h3>{i18n.t("landing:mainpage.indispensable.label_trailing")}</h3>
                            <p>{i18n.t("landing:mainpage.indispensable.label_description_trailing")}</p>
                        </Col>
                        <Col className="center">
                            <div className="icon" style={{ padding: "25px 6px" }}><img src="/images/icon_manage_unlimited_signals.svg" alt="The signals feature" /></div>
                            <h3>{i18n.t("landing:mainpage.indispensable.label_manage")}</h3>
                            <p>{i18n.t("landing:mainpage.indispensable.label_description_manage")}</p>
                        </Col>
                        <Col className="center">
                            <div className="icon"><img src="/images/icon_get_profitability_reports.svg" alt="The report feature" /></div>
                            <h3>{i18n.t("landing:mainpage.indispensable.label_profitability")}</h3>
                            <p>{i18n.t("landing:mainpage.indispensable.label_description_profitability")}</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default Indispensable;
