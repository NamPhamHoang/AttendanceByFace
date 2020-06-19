import React, { Component } from 'react';
import './login.scss'
import './font-awesome.scss'
const Login = function Welcome(props) {
    return (
<div>

<link href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700" rel="stylesheet"/>
<link href="//fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700" rel="stylesheet"/>

<div class="header-w3l">
			<h1>Face Recognition</h1>
		</div>
	
		<div class="main-w3layouts-agileinfo">
			

	        
						<div class="wthree-form">
						
							<form action="#" method="post">
								<div class="form-sub-w3">
									<input type="text" name="Username" placeholder="Username " required="" />
								<div class="icon-w3">
									<i class="fa fa-user" aria-hidden="true"></i>
								</div>
								</div>
								<div class="form-sub-w3">
									<input type="password" name="Password" placeholder="Password" required="" />
								<div class="icon-w3">
									<i class="fa fa-unlock-alt" aria-hidden="true"></i>
								</div>

							
								</div>
								<label class="anim">
								<input type="checkbox" class="checkbox"/>
									<span>Remember Me</span> 
									<a href="#">Forgot Password?</a>
								</label> 
								<div class="clear"></div>
								<div class="submit-agileits">
									<input type="submit" value="Login"/>
								</div>
							</form>

						</div>


		</div>
	
		<div class="footer">
			<p>&copy; 2017 Glassy Login Form. All rights reserved | Design by Group 3</p>
		</div>

</div>
	

   
    )}

export default Login 