import i18n from 'i18next';
import { Col, Row } from 'reactstrap';
import { Trans } from 'react-i18next';
import Try from './Try';
import "./Pricing.scss";


class Pricing extends React.Component {
    render() {
        return (
            <div id="pricing" className="pricing_section">
                <Row>
                    <Col>
                        <h2>{i18n.t("landing:mainpage.pricing.title")}</h2>
                    </Col>
                </Row>
                <div className="pricing_container">
                    <Row>
                        <Col>
                            <div className="pricing_box starter">
                                <h3>{i18n.t("landing:mainpage.pricing.plan_starter.title")}</h3>
                                <div className="price_box">
                                    <div className="original_price">{i18n.t("landing:mainpage.pricing.plan_starter.original_price")}</div>
                                    <div className="price">{i18n.t("landing:mainpage.pricing.plan_starter.price")}</div>
                                </div>
                                <p className="description">{i18n.t("landing:mainpage.pricing.plan_starter.description")}<br />
                                                           {i18n.t("landing:mainpage.pricing.plan_starter.subDescription")}</p>
                                <ul>
                                    <li><b><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item1" /></b></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item2" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item3" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item4" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item5" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item6" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item7" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item8" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item9" /></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="pricing_box starter">
                                <h3>{i18n.t("landing:mainpage.pricing.plan_starter.title")}</h3>
                                <div className="price_box">
                                    <div className="original_price">{i18n.t("landing:mainpage.pricing.plan_starter.original_price")}</div>
                                    <div className="price">{i18n.t("landing:mainpage.pricing.plan_starter.price")}</div>
                                </div>
                                <p className="description">{i18n.t("landing:mainpage.pricing.plan_starter.description")}<br />
                                                           {i18n.t("landing:mainpage.pricing.plan_starter.subDescription")}</p>
                                <ul>
                                    <li><b><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item1" /></b></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item2" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item3" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item4" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item5" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item6" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item7" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item8" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item9" /></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="pricing_box starter">
                                <h3>{i18n.t("landing:mainpage.pricing.plan_starter.title")}</h3>
                                <div className="price_box">
                                    <div className="original_price">{i18n.t("landing:mainpage.pricing.plan_starter.original_price")}</div>
                                    <div className="price">{i18n.t("landing:mainpage.pricing.plan_starter.price")}</div>
                                </div>
                                <p className="description">{i18n.t("landing:mainpage.pricing.plan_starter.description")}<br />
                                                           {i18n.t("landing:mainpage.pricing.plan_starter.subDescription")}</p>
                                <ul>
                                    <li><b><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item1" /></b></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item2" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item3" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item4" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item5" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item6" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item7" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item8" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item9" /></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="pricing_box starter">
                                <h3>{i18n.t("landing:mainpage.pricing.plan_starter.title")}</h3>
                                <div className="price_box">
                                    <div className="original_price">{i18n.t("landing:mainpage.pricing.plan_starter.original_price")}</div>
                                    <div className="price">{i18n.t("landing:mainpage.pricing.plan_starter.price")}</div>
                                </div>
                                <p className="description">{i18n.t("landing:mainpage.pricing.plan_starter.description")}<br />
                                                           {i18n.t("landing:mainpage.pricing.plan_starter.subDescription")}</p>
                                <ul>
                                    <li><b><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item1" /></b></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item2" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item3" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item4" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item5" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item6" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item7" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item8" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item9" /></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="pricing_box starter">
                                <h3>{i18n.t("landing:mainpage.pricing.plan_starter.title")}</h3>
                                <div className="price_box">
                                    <div className="original_price">{i18n.t("landing:mainpage.pricing.plan_starter.original_price")}</div>
                                    <div className="price">{i18n.t("landing:mainpage.pricing.plan_starter.price")}</div>
                                </div>
                                <p className="description">{i18n.t("landing:mainpage.pricing.plan_starter.description")}<br />
                                                           {i18n.t("landing:mainpage.pricing.plan_starter.subDescription")}</p>
                                <ul>
                                    <li><b><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item1" /></b></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item2" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item3" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item4" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item5" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item6" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item7" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item8" /></li>
                                    <li><Trans i18nKey="landing:mainpage.pricing.plan_starter.list_item9" /></li>
                                </ul>
                            </div>
                        </Col>  
                    </Row>
                </div>
                <Try />
            </div>
        );
    }
}

export default Pricing;
