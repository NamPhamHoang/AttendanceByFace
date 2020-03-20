import "./main.scss"
import Main from './home_sections/Main';
import Footer from './components/Footer';
class Home extends React.Component {
    render() {
        return (
           <React.Fragment>
               <Main/>
           </React.Fragment>
        )
    }
}

export default Home