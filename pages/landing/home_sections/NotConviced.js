import i18n from 'i18next';
import { Container, Col, Row } from 'reactstrap';
import "./NotConviced.scss";

class NotConviced extends React.Component {
    render() {
        return (
            <Container>
                <div className="not_conviced_section">
                    <Row>
                        <Col>
                            <h2>{i18n.t("landing:mainpage.not_conviced.title")}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="center">
                            <h3>{i18n.t("landing:mainpage.not_conviced.label_secure")}</h3>
                            <div className="icon"><img src="/images/icon_secure.svg" alt="Security badge" /></div>
                            <p>{i18n.t("landing:mainpage.not_conviced.label_description_secure")}</p>
                        </Col>
                        <Col className="center">
                            <h3>{i18n.t("landing:mainpage.not_conviced.label_cloud")}</h3>
                            <div className="icon"><img src="/images/icon_cloud.svg" alt="Cloud solution" /></div>
                            <p>{i18n.t("landing:mainpage.not_conviced.label_description_cloud")}</p>
                        </Col>
                        <Col className="center">
                            <h3>{i18n.t("landing:mainpage.not_conviced.label_community")}</h3>
                            <div className="icon"><img src="/images/icon_community.svg" alt="Community" /></div>
                            <p>{i18n.t("landing:mainpage.not_conviced.label_description_community")}</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default NotConviced;
