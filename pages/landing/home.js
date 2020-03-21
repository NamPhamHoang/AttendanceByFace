import "./main.scss"
import Main from './home_sections/Main';
import Footer from './components/Footer';
class Home extends React.Component {
    render() {
        return (
            <span>
                <Main />
                <h1><a href = "/user">Main</a></h1>
            </span >
        )
    }
}

export default Home