import React from 'react';
import Header from '../landing/components/Header';
import Login from '../landing/login_sections/Login';
import Footer from '../landing/components/Footer';
import axios from 'axios'
class partner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
    this.getData();
  }
  getData = () => {
    axios.get('http://localhost:4000/teacherData').then((res)=>{
      const data = res.data;
      this.setState({
        users: data
      })
    })
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