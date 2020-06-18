import i18n from 'i18next';
import Header from './components/Header'
import 'react-html5-camera-photo/build/css/index.css';
import Main from './home_sections/Main';

class manage extends React.Component {
    render() {
       return (
           <span>
               <Header />
               Đây là trang quản lí thông tin học sinh đi học
               //<Main />
           </span >
       )
   }
 }
 
 export default manage;
 
 