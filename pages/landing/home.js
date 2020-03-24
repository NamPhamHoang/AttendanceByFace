import "./main.scss"
import Header from './components/Header';
import Main from './home_sections/Main';
class Home extends React.Component {
    render() {
        return (
            <span>
                <Header />
                <Main />
            </span >
        )
    }
}

export default Home