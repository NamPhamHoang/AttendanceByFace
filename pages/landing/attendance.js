import i18n from 'i18next';
import Header from './components/Header'
import React, { useState, useEffect } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import ScriptTag from 'react-script-tag';
import './attendance.scss'

   const User = (props) => {
         return (
            <>
               <div className = "container_camera row">
                  <div className="col-sm-2 side_bar">
                     <img id="face_img" src = "/images/Bitmap.png" width="100" height="100"></img>
                     <button id="btn_snap" className=" btn btn-primary"> click me</button>
                  </div>
                  <div className="container_confirm" id="confirm">
                     <canvas id = "context" width = "650" height = "650"></canvas>
                     <div className = "btn_confirm">
                        <button className="btn btn-success" id="btn_use">Recognite</button>
                        <button className="btn btn-Secondary" id="btn_another">ANOTHER </button>
                     </div>
                  </div>
                  <video id="video" className="col-sm-10" width="970" height="970" autoPlay></video>
               </div>
               <ScriptTag isHydrating={true} type="text/javascript" src="faceapi" />
               <ScriptTag isHydrating={true} type="text/javascript" src="recog" />
            </>
         )
      }

export default User

