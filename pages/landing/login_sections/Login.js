import React from 'react';
import i18n from 'i18next';
import { Container } from 'next/dist/pages/_app';
import './Login.scss'

const Login = () => {
    
    return (
    <div className="container login_section">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
    
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="styles.css" />
      
   
        <div className="d-flex justify-content-center h-100">
            <h1>{i18n.t("landing:mainpage.partners.title")}</h1>
            <div className="card">
                <div className="card-header">
                    <h3>{i18n.t("landing:mainpage.partners.Login_title")}</h3>
                   
                </div>
                <div className="card-body">
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder={i18n.t("landing:mainpage.partners.user_name")}/>
                            
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder={i18n.t("landing:mainpage.partners.pass_word")}/>
                        </div>
                        <div className="row align-items-center remember">
                            <input type="checkbox"/>{i18n.t("landing:mainpage.partners.label_checkbox")}
                        </div>
                        <div className="form-group">
                            <input type="submit" value={i18n.t("landing:mainpage.partners.btn_login")} className="btn float-right login_btn"/>
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

export default Login;