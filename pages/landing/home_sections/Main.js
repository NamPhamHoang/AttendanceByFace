import i18n from 'i18next';
import Header from '../components/Header';
import HeaderBelow from './component_home_sections/headerBelow';
import InfoTecher from './component_home_sections/infoTecher';
import SubjectCode from './component_home_sections/subjectCode';
import StudentList from './component_home_sections/studentList';
import "./Main.scss"
import dataSubject from './component_home_sections/dataSubject'
import axios from "axios"
class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataSubject: dataSubject,
        }
    }

    render() {
        var {dataSubject} = this.state
        return (
            <div className="main_section container"> 
                <HeaderBelow/>
                <div className="row mb">
                    <div className="col-7"> <InfoTecher /></div>
                    <div className="col-5"> <SubjectCode dataSubjects = {dataSubject}/></div>
                </div>
                <StudentList/>
            </div>
        );
    }
}

export default Main;
