import React from "react";
import {Link} from "react-router-dom";
import './register.css'

export const Register = () =>
	<div>

		<div className="container">

			<Link to={'/'}>Back to Home</Link>

			<h1>Register</h1>

			<div className="form-group row">
				<label htmlFor="usernameFld" className="col-sm-2 col-form-label">Username</label>
				<div className="col-sm-10">
					<input type="username" className="form-control wbdv-field wbdv-username"
						   id="usernameFld"/>
				</div>
			</div>

			<div className="form-group row">
				<label htmlFor="passwordFld" className="col-sm-2 col-form-label">Password</label>
				<div className="col-sm-10">
					<input type="password"
						   className="form-control wbdv-field wbdv-password"
						   id="passwordFld"/>
				</div>
			</div>

			<div className="form-group row">
				<label htmlFor="verifyPasswordFld"
					   className="col-sm-2 col-form-label">Verify Password
				</label>
				<div className="col-sm-10">
					<input type="password"
						   className="form-control wbdv-field wbdv-password-verify"
						   id="verifyPasswordFld"/>
				</div>
			</div>

			<div className="form-group row">
				<label htmlFor="registerBtn" className="col-sm-2 col-form-label"></label>

				<div className="col-sm-10">
					<Link to='#'
					   className="btn project-register-button btn-block"
					   id="registerBtn">
						Register
					</Link>
				</div>
			</div>

			<div>
				<Link to='/login'>
					Already registered? Sign in
				</Link>
			</div>

		</div>

	</div>


