import i18n from 'i18next';
import "./Try.scss";
import "./TelegramButton.scss";

class Try extends React.Component {
    render() {
        return (
            <div className="try_section">
                <h2 className="title">{i18n.t("landing:mainpage.try.title")}</h2>
                <h3 className="description">{i18n.t("landing:mainpage.try.description")}</h3>
                <p className="actions">
                    <a className="telegram_button" href="https://t.me/AnnyDeCrypto_bot" target="_blank">
                        <span className="icon"></span>
                        <span className="label">{i18n.t("landing:mainpage.try.label_button")}</span>
                    </a>
                </p>
            </div>
        );
    }
}

export default Try;
