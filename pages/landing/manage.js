import i18n from 'i18next';
import Header from './components/Header'
import Footer from './components/Footer'
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios'
import Main from "./manager_sections/Main"
import React, { useState } from 'react'
const manage = (props) => {
    return (
        <span>
            {/* <Header /> */}
            <Main />
            {/* <Footer /> */}
        </span >
    )
}
 export default manage;
 