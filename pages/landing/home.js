import "./main.scss"
import Main from './home_sections/Main';
import Indispensable from './home_sections/Indispensable';
import Partners from './home_sections/Partners';
import NotConviced from './home_sections/NotConviced';
import Testimonials from './home_sections/Testimonials';
import Pricing from './home_sections/Pricing';
import Footer from './components/Footer';

class Home extends React.Component {
    render() {
        return (
            <span>
                <Main />
                <Indispensable />
                <Partners />
                <NotConviced />
                <Testimonials />
                <Pricing />
                <Footer />
            </span >
        )
    }
}

export default Home