import i18n from 'i18next';
import Header from './components/Header'
import 'react-html5-camera-photo/build/css/index.css';
import Main from './home_sections/Main';
import axios from 'axios'
import React, { useState } from 'react'


const manage = (props) => {
    return (
        <span>
            <Header />
            <Main />
        </span >
    )
}
 export default manage;
 