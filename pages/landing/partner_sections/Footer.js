import React from 'react'
import i18n from 'i18next'

import './Footer.scss';
import Line from '../components/Line';

const Footer = () => {
  return (
    <div className='partner-footer'>
      <Line />
      <div className="p-f-content">
        <h3>{i18n.t('landing:partner.footer.head1')}</h3>
        <h2>{i18n.t('landing:partner.footer.head2')}</h2>
      </div>
      <div className="f-listHub container">
        <div className="f-l-content">
          <h3>{i18n.t('landing:partner.footer.list.item1.head')}</h3>
          <p>{i18n.t('landing:partner.footer.list.item1.body')}</p>
        </div>
        <div className="f-l-content">
          <h3>{i18n.t('landing:partner.footer.list.item2.head')}</h3>
          <p>{i18n.t('landing:partner.footer.list.item1.body')}</p>
        </div>
        <div className="f-l-content">
          <h3>{i18n.t('landing:partner.footer.list.item3.head')}</h3>
          <p>{i18n.t('landing:partner.footer.list.item1.body')}</p>
        </div>
      </div>
      <div className='f-image'></div>
    </div>
  )
}
export default Footer;
