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
                       
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Partners;
