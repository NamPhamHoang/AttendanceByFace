import i18n from 'i18next'
import { Container, Row, Col } from 'react-bootstrap'

import "./Main.scss";
import Card from '../components/Card'

class Main extends React.Component {
  render(){
    return(
      <div className='partner-main-wrapper'>
        <div className="partner-main-section">
            <div className="anny-2">
              <div className="Anny-full-body-2">
                <img 
                  src="/images/partner/anny-full-body.png" />
              </div>
             
              <div className="oval-2"></div>
            </div>
            <div className="content">
              <p className='head'>{i18n.t("landing:partner.mainSection.head")}</p>
              <p className="body-content">{i18n.t("landing:partner.mainSection.content")}</p>
              <p className="actions">
                <a className="telegram_button" href="https://t.me/AnnyDeCrypto_bot" target="_blank">
                  <span className="icon"></span>
                  <span className="label">{i18n.t("landing:partner.mainSection.button")}</span>
                </a>
              </p>
            </div>
            
        </div>
        <div className="container-fluid partner-list-cart ">
              <Row>
                <Card icon='/images/partner/startup.png' title={i18n.t("landing:partner.mainSection.cardStartup.head")} content={i18n.t("landing:partner.mainSection.cardStartup.body")} />
                <Card icon='/images/partner/whale.png' nameClass='card-whale' title={i18n.t("landing:partner.mainSection.cardWhale.head")} content={i18n.t("landing:partner.mainSection.cardWhale.body")} />
                <Card icon='/images/partner/joystick.png' title={i18n.t("landing:partner.mainSection.cardControl.head")} content={i18n.t("landing:partner.mainSection.cardControl.body")} />
              </Row>
              
        </div>
      </div>
    )
  }
}
export default Main;