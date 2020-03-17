import "./main.scss"
import "./team.scss"
import i18n from 'i18next';
import { Container, Col, Row } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import TeamMember from './components/TeamMember';

class Team extends React.Component {
    render() {
        return (
            <span>
                <div className="main">
                    <Header />
                    <Container className="box">
                        <h1 className="title">{i18n.t("landing:team.title")}</h1>
                        <p className="subtitle">{i18n.t("landing:team.description")}</p>
                        <div className="team_section">
                            <Row>
                                <Col>
                                    <TeamMember
                                        name='Thomas Silverberg'
                                        position='Founder & CEO'
                                        image='member_thomas.jpg'
                                        social_linkedin='thomas-silverberg-37a42b'
                                    />
                                </Col>
                                <Col>
                                    <TeamMember
                                        name='Guilherme Pagotto'
                                        position='Co-founder & Head of Finance and Legal'
                                        image='member_guilherme.jpg'
                                        social_linkedin='guilherme-pagotto-a6102517'
                                    />
                                </Col>
                                <Col>
                                    <TeamMember
                                        name='Anselmo Zago'
                                        position='Co-founder & Head of Development'
                                        image='member_anselmo.jpg'
                                        social_linkedin='anselmozago'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TeamMember
                                        name='Caroline Silverberg'
                                        position='Head of Operations'
                                        image='member_carol.jpg'
                                        social_linkedin='caroline-silverberg-36806018b'
                                    />
                                </Col>
                                <Col>
                                    <TeamMember
                                        name='Renato David'
                                        position='Head of Marketing and Partnerships'
                                        image='member_renato.jpg'
                                    />
                                </Col>
                                <Col>
                                    <TeamMember
                                        name='Matheus Balan'
                                        position='Software Developer'
                                        image='member_matheus.jpg'
                                        social_linkedin='matheus-sobreira-1a47ba145'
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="separator"></div>
                </div>
                <Footer />
            </span>
        )
    }
}

export default Team