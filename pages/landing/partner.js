import React from 'react';
import Header from '../landing/components/Header';
import Login from '../landing/login_sections/Login';
import Footer from '../landing/components/Footer';

class partner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          user_name: "PhamHoangNam",
          pass_word: "admin1"
        },
        {
          user_name: "LeTienDat",
          pass_word: "admin2"
        },
        {
          user_name: "NguyenTanDung",
          pass_word: "admin3"
        },
        {
          user_name: "VoQuocTrung",
          pass_word: "admin4"
        },
        {
          user_name: "NgoThiMongMo",
          pass_word: "admin5"
        },
      ]
    }
  }

  render() {
    return (
      <>
        <Header />
        <Login users = {this.state.users}/>
        <Footer />
      </>
    )
  }
}
export default partner;