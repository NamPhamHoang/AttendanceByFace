import i18n from "i18next";
import Slider from "react-slick";
import { Container } from "reactstrap";
import TestimonialQuote from "./TestimonialQuote";
import "./Testimonials.scss";

class Testimonials extends React.Component {

    render() {

        var settings = {
            className: "testimonials",
            dots: true,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };

        return (
            <Container className="testimonials_section">

                <style dangerouslySetInnerHTML={{
                    __html: `
                        @import url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css);
                        @import url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css);
                    ` }} />

                <h2>{i18n.t("landing:mainpage.testimonials.title")}</h2>

                <Slider {...settings}>

                    <TestimonialQuote
                        name="Oberdan Viana"
                        caption="Home Trader"
                        social_linkedin="oberdan-viana-abb651174"
                        social_telegram="OberdanViana"
                        image="oberdanviana.jpg"
                        quote={i18n.t("landing:mainpage.testimonials.quote.oberdan")}
                    />

                    <TestimonialQuote
                        name="Jaqueline Mognaga"
                        caption="Pro Trader"
                        social_linkedin="jaqueline-de-vargas-dos-reis-mognaga-41aba755"
                        image="jaqueline.jpg"
                        quote={i18n.t("landing:mainpage.testimonials.quote.jaqueline")}
                    />

                    <TestimonialQuote
                        name="Bruno Gama"
                        caption="Home Trader"
                        image="brunogama.jpg"
                        quote={i18n.t("landing:mainpage.testimonials.quote.brunogama")}
                    />

                    <TestimonialQuote
                        name="Alvaro Batista"
                        caption="Pro Trader"
                        quote={i18n.t("landing:mainpage.testimonials.quote.alvaro")}
                    />

                    <TestimonialQuote
                        name="Wagner Jr."
                        caption="Home Trader"
                        image="wagnerjr.jpg"
                        quote={i18n.t("landing:mainpage.testimonials.quote.wagnerjr")}
                    />

                    <TestimonialQuote
                        name="André Gontijo"
                        caption="Home Trader"
                        social_linkedin="andré-de-almeida-gontijo-884605190"
                        social_telegram="andregontijo1980"
                        image="andregontijo.jpg"
                        quote={i18n.t("landing:mainpage.testimonials.quote.andregontijo")}
                    />

                </Slider>
            </Container>
        );
    }
}

export default Testimonials;



