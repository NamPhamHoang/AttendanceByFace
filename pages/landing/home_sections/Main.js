import i18n from 'i18next';
import Header from '../components/Header';
import "./Main.scss";
import Exchanges from './Exchanges';
import Powered from './Powered';

class Main extends React.Component {
    render() {
        return (
            <div className="main_section">
                <Header />
                <div className="assistant_image">
                    <img src="/images/app1.jpg" />
                </div>
                <div className="box">
                    <h1 className="title">{i18n.t("landing:mainpage.mainbox.title")}</h1>
                    <p className="description">{i18n.t("landing:mainpage.mainbox.description")}</p>
                    <p className="actions">
                        <a className="telegram_button" href="https://t.me/AnnyDeCrypto_bot" target="_blank">
                            <span className="icon"></span>
                            <span className="label">{i18n.t("landing:mainpage.mainbox.label_button")}</span>
                        </a>
                    </p>
                </div>
                <Exchanges />
                <Powered />
            </div>
        );
    }
}

export default Main;
