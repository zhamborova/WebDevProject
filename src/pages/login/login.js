import React from "react";
import {Link} from "react-router-dom";
import './login.css'

export const Login = () =>
	<div>

		<div className="container">
			<Link to={'/'}>Back to Home</Link>
			<h1>Login</h1>

			<div className="form-group row">
				<label htmlFor="username" className="col-sm-2 col-form-label">Email</label>
				<div className="col-sm-10">
					<input type="username"
						   className="form-control" id="username"/>
				</div>
			</div>


			<div className="form-group row">
				<label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
				<div className="col-sm-10">
					<input type="password"
						   className="form-control" id="password"/>
				</div>
			</div>


			<div className="form-group row">
				<label htmlFor="loginBtn" className="col-sm-2 col-form-label"></label>

				<div className="col-sm-10">
					<Link to='#'
					   className="btn btn-block project-login-button" id="loginBtn">
						Login
					</Link>
				</div>
			</div>

			<div>
				<a href="#">Forgot Password?</a>
			</div>

			<div>
				<Link to={'/register'}>Not registered yet? Sign Up</Link>
			</div>
		</div>

	</div>



