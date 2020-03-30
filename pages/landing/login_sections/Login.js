import React from 'react';
import i18n from 'i18next';
import { Container } from 'next/dist/pages/_app';
import { Redirect } from 'react-router-dom'
import './Login.scss'
import axios from 'axios';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            pass_word: "",
            loginError: ""
        }
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
      }
    
    handleSubmit = (event) => {
        event.preventDefault();
        var users = this.props.users;
        users.forEach(user => {
            if(user.user_name === this.state.user_name && user.pass_word === this.state.pass_word){
                location = "/pt"
            }
            else {    
                  
                }
            })  
        }
    render() {
        return ( 
        <div className="container login_section">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
            <link rel="stylesheet" type="text/css" href="styles.css" />
        
    
            <div className="d-flex justify-content-center h-100">
                <div className="back-login">
                    <h1>{i18n.t("landing:mainpage.partners.title")}</h1>
                    <img src="/images/face_detection.jpg"></img>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3>{i18n.t("landing:mainpage.partners.Login_title")}</h3>
                    
                    </div>
                    <div className="card-body">
                        <form onSubmit = {this.handleSubmit}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder={i18n.t("landing:mainpage.partners.user_name")} 
                                    
                                    name="user_name"
                                    value = {this.state.email}
                                    onChange = {this.handleChange}/>    
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder={i18n.t("landing:mainpage.partners.pass_word")} 
                                    
                                    name="pass_word"
                                    value = {this.state.pass_word}
                                    onChange = {this.handleChange}/>
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox"/>{i18n.t("landing:mainpage.partners.label_checkbox")}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn float-right login_btn">{i18n.t("landing:mainpage.partners.btn_login")}</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                        {i18n.t("landing:mainpage.partners.label_note")}<a href="#"> {i18n.t("landing:mainpage.partners.label_signUp")}</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#"> {i18n.t("landing:mainpage.partners.label_Forgot your password?")}</a>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login;