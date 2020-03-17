import React from 'react'

import Telegram from './partner_sections/Telegram';
import Footer from './partner_sections/Footer';
import Main from './partner_sections/Main'
import Header from './partner_sections/Header'
import BecomePremium from './partner_sections/BecomePremium'; 

const partner = () => {
  return (
    <>
      <Header />
      <Main />
      <Telegram />
      <BecomePremium /> 
      <Footer />
    </>
  )
}
export default partner;