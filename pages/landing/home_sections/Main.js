import i18n from 'i18next';
import Navbar from  '.component_home_sections/Navbar'
import "./Main.scss"
import Sidebar from "./component_home_sections/sidebar"
import axios from "axios"
class Main extends React.Component {
    render() {
     
        return (
            <div className="container"> 
                <Navbar/>
                <Sidebar/>
            </div>
        );
    }
}

export default Main;
