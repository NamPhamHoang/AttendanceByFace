import "./main.scss"
import Main from './home_sections/Main';
import Indispensable from './home_sections/Indispensable';
import Partners from './home_sections/Partners';
import NotConviced from './home_sections/NotConviced';
import Team from './home_sections/team';
import Footer from './components/Footer';
class Home extends React.Component {
    render() {
        return (
            <span>
                <Main />
                <Indispensable />
                <Partners />
                <NotConviced />
                <Team />
                <Footer />
            </span >
        )
    }
}

export default Home