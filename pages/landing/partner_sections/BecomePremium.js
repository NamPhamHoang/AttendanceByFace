import React from 'react'
import i18n from 'i18next';
import { Row, Col} from 'react-bootstrap';

import './BecomePremium.scss'
import Line from '../components/Line';

const BecomePremium = () => {
  return (
    <div className='b-premium-wrapper'>
      <Line />
      <h3 className='b-p-title'>Become a Premium Partner</h3>
      <div className="b-p-desc row" >
        <Col md={6} lg={6} sm={12}>
          <Row className='d-wrapper'>
          <div className='d-oval '>
            <span>15%</span>
          </div>
          <div className='d-content'>
            <h3 className='head'>{i18n.t("landing:partner.BecomePremium.item1.head")}</h3>
            <p className='body'>{i18n.t("landing:partner.BecomePremium.item1.body")}</p>
          </div>
          </Row>
        </Col>
        <Col md={6} lg={6} sm={12}>
          <Row className='d-wrapper'>
            <div className='d-oval'>
              <span>50</span>
            </div>
            <div className='d-content'>
              <h3 className='head'>{i18n.t("landing:partner.BecomePremium.item2.head")}</h3>
              <p className='body'>{i18n.t("landing:partner.BecomePremium.item2.body")}</p>
            </div>
          </Row>
        </Col>
      </div>
      <div className="b-p-benefit container-fluid">
        <div className='b-image'>
          <img src="/images/partner/Bitmap.png" alt=""/>
        </div>
        <ul className='b-list'>
          <li>{i18n.t("landing:partner.BecomePremium.listBenefit.item1")}</li>
          <li>{i18n.t("landing:partner.BecomePremium.listBenefit.item2")}</li>
          <li>{i18n.t("landing:partner.BecomePremium.listBenefit.item3")}</li>
          <li>{i18n.t("landing:partner.BecomePremium.listBenefit.item4")}</li>
          <li>{i18n.t("landing:partner.BecomePremium.listBenefit.item5")}</li>
        </ul>
      </div>
      <div className="b-p-sign">
        <h3>{i18n.t("landing:partner.BecomePremium.apply.head")}</h3>
        <a href='#'>{i18n.t("landing:partner.BecomePremium.apply.textLink")}</a>
        <p>{i18n.t("landing:partner.BecomePremium.apply.desc")}</p>
      </div>
      <div className='b-p-line'></div>
    </div>
  )
}
export default BecomePremium;
