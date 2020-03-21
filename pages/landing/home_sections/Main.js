import i18n from 'i18next';
import Header from '../components/Header';
import HeaderBelow from './component_home_sections/headerBelow';
import InfoTecher from './component_home_sections/infoTecher';
import SubjectCode from './component_home_sections/subjectCode';
import StudentList from './component_home_sections/studentList';
import "./Main.scss";


class Main extends React.Component {
    render() {
        return (
            <div className="main_section container"> 
                <Header/>
                <HeaderBelow/>
                <div className="row">
                    <div className="col-7"> <InfoTecher/></div>
                    <div className="col-5"> <SubjectCode/></div>
                </div>
                <StudentList/>
            </div>
        );
    }
}

export default Main;
