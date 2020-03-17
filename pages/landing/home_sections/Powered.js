import i18n from 'i18next';
import { Waypoint } from 'react-waypoint';
import { Col, Row } from 'reactstrap';
import "./Powered.scss";

class Powered extends React.Component {

    componentDidMount() {
        this.endedTimeout = 0;
        this.tagActive = 0;
        this.videocontainer = document.getElementById('videoclip');
        this.videosource = document.getElementById('mp4video');
        this.videoInViewport = false;
        this.handleTag(0);
    }

    handleTag(index) {
        clearTimeout(this.endedTimeout);

        // Select tag
        let tag = this.state.tags[index];
        this.state.tags.map((item) => {
            let element = document.getElementById("tag_" + item.name);
            if (tag.name == item.name) {
                element.className = "tag active";
            } else {
                element.className = "tag";
            }
        });

        // Change video
        this.videocontainer.pause();
        this.videosource.setAttribute('src', tag.src);
        this.videocontainer.load();
        if (this.videoInViewport) {
            this.videocontainer.play();
        }
        this.tagActive = index;
    }

    handleVideoEnded() {
        let index = this.tagActive;
        index++;
        if (index == this.state.tags.length) {
            index = 0;
        }
        let context = this;
        this.endedTimeout = setTimeout(() => {
            context.handleTag(index);
        }, 3000);

    }

    handleEnterViewport() {
        this.videoInViewport = true;
        this.videocontainer.play();
    }

    handleExitViewport() {
        this.videoInViewport = false;
        this.videocontainer.pause();
    }

    state = {
        tags: [
            { name: "AUTO_BUY", side: "left", src: "/movies/autobuy.mp4" },
            { name: "TRAILING_TAKE_PROFIT", side: "left", src: "/movies/trailing.mp4" },
            { name: "EASY_TO_USE", side: "left", src: "/movies/easy_to_configure.mp4" },
            { name: "CHECK_SIGNAL", side: "right", src: "/movies/check_signal.mp4" },
            { name: "BALANCE_CHECK", side: "right", src: "/movies/balance_check.mp4" }
        ]
    };

    render() {

        const {
            tags,
        } = this.state;

        return (
            <div id="about" className="powered_section">
                <Row>
                    <Col>
                        <h2>{i18n.t("landing:mainpage.powered.title")}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>{i18n.t("landing:mainpage.powered.description")}</h3>
                    </Col>
                </Row>

                <div className="features">
                    <div className="iphone_movie">
                        <Waypoint
                            onEnter={() => this.handleEnterViewport()}
                            onLeave={() => this.handleExitViewport()}>
                            <video
                                id="videoclip"
                                preload="metadata"
                                width="259"
                                height="558"
                                muted
                                playsInline
                                style={{ width: "259px", height: "558px" }}
                                onEnded={() => this.handleVideoEnded()}>
                                <source id="mp4video" src="" type="video/mp4" />
                            </video>
                        </Waypoint>
                    </div>
                    <div className="iphone_border"></div>
                </div>

                <div className="features_left">
                    <div className="range"><img src="/images/chart-range-green.svg" width="auto" height="170" /></div>
                    <div className="features_left_box">
                        <div className="title">{i18n.t("landing:mainpage.powered.features_left.title")}</div>
                        <div className="description">{i18n.t("landing:mainpage.powered.features_left.description")}</div>
                        <div className="note">{i18n.t("landing:mainpage.powered.features_left.note")} •</div>
                    </div>
                    <div className="tags">{
                        tags.map((item, index) => {
                            if (item.side == 'left') return <span key={item.name}>
                                <a id={'tag_' + item.name}
                                    href="javascript:void(0)"
                                    onClick={() => this.handleTag(index)}
                                    className="tag">
                                    #{item.name}
                                </a>
                                &nbsp; &nbsp;
                        </span>
                        })}
                    </div>
                </div>

                <div className="features_right">
                    <div className="tags">{
                        tags.map((item, index) => {
                            if (item.side == 'right') return <span key={item.name}>
                                &nbsp; &nbsp;
                            <a id={'tag_' + item.name}
                                    href="javascript:void(0)"
                                    onClick={() => this.handleTag(index)}
                                    className="tag">
                                    #{item.name}
                                </a>
                            </span>
                        })}
                    </div>
                    <div className="features_right_box">
                        <div className="title">{i18n.t("landing:mainpage.powered.features_right.title")}</div>
                        <div className="description">{i18n.t("landing:mainpage.powered.features_right.description")}</div>
                        <div className="note">• {i18n.t("landing:mainpage.powered.features_right.note")}</div>
                    </div>
                    <div className="range"><img src="/images/chart-range-orange.svg" width="auto" height="170" /></div>
                </div>

            </div>
        );
    }
}

export default Powered;
