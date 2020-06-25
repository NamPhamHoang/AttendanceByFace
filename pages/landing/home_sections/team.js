import "../main.scss"
import "./team.scss"
import i18n from 'i18next';
import { Container, Col, Row } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';

class Team extends React.Component {
    render() {
        return (
            <span>
                <div className="main">
                    <Container className="box">
                        <h1 className="title">{i18n.t("landing:team.title")}</h1>
                        <p className="subtitle">{i18n.t("landing:team.description")}</p>
                        <div className="team_section">
                            <Row>
                                <Col>
                                    <TeamMember
                                        name='Pham Hoang Nam'
                                        position={i18n.t("landing:team.sub_founder")}
                                        image='nam6.jpg'
                                        social_linkedin='thomas-silverberg-37a42b'
                                    />
                                </Col>
                                <Col>
                                    <TeamMember
                                        name='Le Tien Dat'
                                        position={i18n.t("landing:team.sub_finance")}
                                        image='dat.jpg'
                                        social_linkedin='guilherme-pagotto-a6102517'
                                    />
                                </Col>
                                <Col>
                                    <TeamMember
                                        name='Vo Quoc Trung'
                                        position={i18n.t("landing:team.sub_developmen")}
                                        image='trung.jpg'
                                        social_linkedin='anselmozago'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TeamMember
                                        name='Nguyen Tan Dung'
                                        position={i18n.t("landing:team.sub_operation")}
                                        image='dung.jpg'
                                        social_linkedin='caroline-silverberg-36806018b'
                                    />
                                </Col>
                                <Col>
                                    <TeamMember
                                        name='Ngo Mong Mo'
                                        position={i18n.t("landing:team.sub_parternship")}
                                        image='mo.jpg'
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="separator"></div>
                </div>
            </span>
        )
    }
}

export default Team