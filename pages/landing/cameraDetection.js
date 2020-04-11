import * as faceapi from 'face-api.js';
import React, { useState, useRef } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview';

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
])
function CameraDet () {
    const cameraInput = useRef();
    const inputRef = useRef();
    const [dataUri, setDataUri] = useState('')
    function handleTakePhotoAnimationDone (dataUri) {
     setDataUri(dataUri);
    }
    
    function onCameraStart() {
        setInterval(async () => {
          const detections = await faceapi.detectAllFaces
        })
     }  
   const isFullscreen = false;
    return (
       <div>
         {
            <div>
              <input ref={inputRef}
              name = "email"></input>
            <ImagePreview dataUri={dataUri}
               isFullscreen={isFullscreen}
            />
             <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
               isFullscreen={isFullscreen}
               onCameraStart = {onCameraStart}
               ref = {cameraInput}
             />
             <button onClick = {()=> {
               console.log(inputRef.current);
             }}>
               Clickme
             </button>
             </div>
         }
       </div>
     );
   }

 export default CameraDet