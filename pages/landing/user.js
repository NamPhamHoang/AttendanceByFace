import i18n from 'i18next';
import Header from './components/Header'
import MediaHandler from './user_sections/face-detection'
import * as faceapi from 'face-api.js';
import Dropzone from "react-dropzone"


export default class user extends React.Component {
    // constructor() {
    //     // super();
    //     // this.state = {
    //     //     hasMedia: false,
    //     //     otherUserId: null
    //     // };
    //     // this.mediaHandler = new MediaHandler();
    // }
    state = {
        loading: true,
        distance: 0
    }

   
    async componentDidMount() {
        await Promise.all ([
        faceapi.nets.faceRecognitionNet.loadFromUri('/static'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/static'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('/static'),
        faceapi.loadSsdMobilenetv1Model('/static'),
        faceapi.loadFaceLandmarkModel('/static'),
        faceapi.loadFaceRecognitionModel('/static')
        ]);
        const jason = await faceapi.fetchImage('/images/face1.jpg')
        const kyle = await faceapi.fetchImage('/images/face2.jpg')
         
        const jasonDescription = await faceapi.allFacesSsdMobilenetv1(jason);
        const kyleDescription = await faceapi.allFacesSsdMobilenetv1(kyle);
        
        this.setState({
            loading: false,
            distance: 0.64
        });
    }

        
    // }
        // this.mediaHandler.getPermissions()
        //     .then((stream) => {
        //         this.setState({hasMedia: true});
        //         try {
        //             this.myVideo.srcObject = stream;
        //         }catch (e) {
        //             this.myVideo.src = URL.createObjectURL(stream)
        //         }
        //         this.myVideo.play();
        //     })                
    

    // PlayVideo = () => {
    //     const canvas = faceapi.createCanvasFromMedia(video)
    //     document.body.append(canvas)
    //     const displaySize = { width: video.width, height: video.height }
    //     faceapi.matchDimensions(canvas, displaySize)
    //     setInterval(async () => {
    //       const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    //       const resizedDetections = faceapi.resizeResults(detections, displaySize)
    //       canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    //       faceapi.draw.drawDetections(canvas, resizedDetections)
    //       faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    //       faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    //     }, 100)
    // }
    onDragEnter = () => {

    }
    render() {
        return (
            <>
            {
                <div>
                   <Dropzone>
                    {({getRootProps, getInputProps}) => (
                        <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    )}
                    </Dropzone>
                </div>
            /* <div className = "User">
                <div className = "video-container" onPlay = {this.PlayVideo}>
                    <video className = "my-video" ref={(ref) => {
                        this.myVideo = ref;
                    }}></video>
                    <video className = "user-video" ref={(ref) => {
                        this.userVideo = ref;
                    }}></video>
                </div>
            </div> */
            }
            </>
        )}
    }

