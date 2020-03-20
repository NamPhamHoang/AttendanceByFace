import i18n from 'i18next';
import Header from '../components/Header';
import HeaderBelow from '../components/headerBelow';
import InfoTecher from '../components/infoTecher';
import SubjectCode from '../components/subjectCode';
import StudentList from '../components/studentList';
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
