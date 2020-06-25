import { Container, Col, Row } from 'reactstrap';
import "./Exchanges.scss";

class Exchanges extends React.Component {
    render() {
        return (
            <Container>
                <div className="exchanges_section">
                    <Row>
                        <Col>
                            <div className="exchanges_container">
                                <div className="exchanges_box">
                                    <div className="inner_box"><img style={{ maxWidth: "180px" }} src="/images/exchange_binance.png" alt="Integrated with the Binance trading exchange" /></div>
                                </div>
                                <div className="exchanges_box">
                                    <div className="inner_box blur"><img src="/images/exchange_bitmex.png" alt="Coming soon, the integration with the Bitmex trading exchange" /></div>
                                </div>
                                <div className="exchanges_box">
                                    <div className="inner_box blur bitfinex"><img src="/images/exchange_bitfinex.png" className="bitfinex" alt="Coming soon, the integration with the Bitfinex trading exchange" /></div>
                                </div>
                                <div className="exchanges_box">
                                    <div className="inner_box blur"><img src="/images/exchange_bittrex.png" alt="Coming soon, the integration with the Bittrex trading exchange" /></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default Exchanges;
