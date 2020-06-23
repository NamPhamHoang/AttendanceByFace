import "./main.scss"
import Main from './home_sections/Main'
import Header from './components/Header';
class Home extends React.Component {
    render() {
        return (
            <span>
                <Header />
                <Main/>
            </span >
        )
    }
}

export default Home