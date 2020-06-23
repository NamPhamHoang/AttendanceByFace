import i18n from 'i18next';
import Header from './components/Header'
import Footer from './components/Footer'
import {AppProvider} from './AppContext'
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios'
import Main from "./manager_sections/Main"
import React, { useState } from 'react'
const manage = (props) => {
    return (
        <AppProvider>
            <span>
                {/* <Header /> */}
                <Main />                        
                {/* <Footer /> */}
            </span >
        </AppProvider>
          
        
    )
}
 export default manage;
 