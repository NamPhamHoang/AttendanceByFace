import i18n from 'i18next';
import Header from './components/Header'
import MediaHandler from './user_sections/face-detection'
import * as faceapi from 'face-api.js';
import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import CameraDet from "./cameraDetection"


class User extends React.Component {
   async componentDidMount () {
      Promise.all([
         faceapi.loadSsdMobilenetv1Model('/models'),
         faceapi.loadFaceLandmarkModel('/models'),
         faceapi.loadFaceRecognitionModel('/models'),
         faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
         faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
         faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
         faceapi.nets.faceExpressionNet.loadFromUri('/models')
       ])
    }
   render() {
      return (
          <span>
              <Header />
              <CameraDet/>
          </span >
      )
  }
}

export default User;

