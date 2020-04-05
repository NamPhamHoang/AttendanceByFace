import i18n from 'i18next';
import Header from './components/Header'
import Face from '../landing/user_sections/face-detection'
import MediaHandler from './user_sections/face-detection'

export default class user extends React.Component {
    constructor() {
        super();
        this.state = {
            hasMedia: false,
            otherUserId: null
        };
        this.mediaHandler = new MediaHandler();
    }

    componentWillMount() {
        this.mediaHandler.getPermissions()
            .then((stream) => {
                this.setState({hasMedia: true});
                try {
                    this.myVideo.srcObject = stream;
                }catch (e) {
                    this.myVideo.src = URL.createObjectURL(stream)
                }
                this.myVideo.play();
            })                
    }

    render() {
        return (
            <>
            <Header />
            <div className = "User">
                <div className = "video-container">
                    <video className = "my-video" ref={(ref) => {
                        this.myVideo = ref;
                    }}></video>
                    <video className = "user-video" ref={(ref) => {
                        this.userVideo = ref;
                    }}></video>
                </div>
            </div>
            </>
        )
    }
}
