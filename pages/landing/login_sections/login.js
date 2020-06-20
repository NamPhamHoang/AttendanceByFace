import React, { Component } from 'react';
import './login.scss'
import './font-awesome.scss'
const Login = function Welcome(props) {
    return (
<div>

<link href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700" rel="stylesheet"/>
<link href="//fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700" rel="stylesheet"/>

<div className="header-w3l">
			<h1>Face Recognition</h1>
		</div>
	
		<div className="main-w3layouts-agileinfo">

						<div className="wthree-form">
							<form action="http://localhost:4000/partner" method="post">
								<div className="form-sub-w3">
									<input type="text" name="Username" placeholder="Username " required="" />
								<div className="icon-w3">
									<i className="fa fa-user" aria-hidden="true"></i>
								</div>
								</div>
								<div className="form-sub-w3">
									<input type="password" name="Password" placeholder="Password" required="" />
								<div className="icon-w3">
									<i className="fa fa-unlock-alt" aria-hidden="true"></i>
								</div>

							
								</div>
								<label className="anim">
								<input type="checkbox" className="checkbox"/>
									<span>Remember Me</span> 
									<a href="#">Forgot Password?</a>
								</label> 
								<div className="clear"></div>
								<div className="submit-agileits">
									<input type="submit" value="Login"/>
								</div>
							</form>

						</div>


		</div>
	
		<div className="footer">
			<p>&copy; 2017 Glassy Login Form. All rights reserved | Design by Group 3</p>
		</div>

</div>
	

   
    )}

export default Login 