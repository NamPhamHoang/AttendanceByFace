import i18n from "i18next";
import ShowMoreText from 'react-show-more-text';
import "./TestimonialQuote.scss";

class TestimonialQuote extends React.Component {
    render() {
        return (
            <div className="testimonial_quote group">
                <blockquote>
                    <ShowMoreText
                        lines={5}
                        more={i18n.t("common:label_show_more")}
                        less={i18n.t("common:label_show_less")}>
                        {this.props.quote}”
                    </ShowMoreText>
                </blockquote>
                <div className="user">
                    <img src={"/images/testimonials/" + (this.props.image || "user.jpg")} alt={this.props.name} />
                    <span>{this.props.name}</span><br />
                    {this.props.caption}
                    <span className="social">
                        {this.props.social_linkedin &&
                            <a className="linkedin" href={'https://linkedin.com/in/' + this.props.social_linkedin} target="_blank">Linkedin</a>}
                        {this.props.social_twitter &&
                            <a className="twitter" href={'https://twitter.com/' + this.props.social_twitter} target="_blank">Twitter</a>}
                        {this.props.social_facebook &&
                            <a className="facebook" href={'https://facebook.com/' + this.props.social_facebook} target="_blank">Facebook</a>}
                        {this.props.social_telegram &&
                            <a className="telegram" href={'https://t.me/' + this.props.social_telegram} target="_blank">Telegram</a>}
                    </span>
                </div>
            </div>
        );
    }
}

export default TestimonialQuote;