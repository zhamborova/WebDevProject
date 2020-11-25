import React from "react";
import {Link} from "react-router-dom";
import './login.css'
import {InputField} from "../../components/input-field/input-field";

export class Login extends React.Component {
	state = {
		email: '',
		password: ''
	}

	updateEmail = (event) => {
		this.setState({
						  email: event.target.value
					  })
		console.log(this.state.email)
	}

	updatePassword = (event) => {
		this.setState({
						  password: event.target.value
					  })
		console.log(this.state.password)
	}

	submitCredentials = () => {
		console.log(this.state.email, this.state.password)
	}


	render() {
		return(
			<div>

				<div className="container-fluid d-flex justify-content-center align-content-center project-login-container">

					<div>

						<h1>Login</h1>

						<InputField fieldName={"Email"} updateEmail={(e) => this.updateEmail(e)}/>
						<InputField fieldName={"Password"} updatePassword={(e) => this.updatePassword(e)}/>

						<div className="form-group row">
							<div className="col-sm-12">
								<Link to='#'
									  className="btn btn-block project-login-button" id="loginBtn"
									  onClick={() => this.submitCredentials()}>
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

			</div>
		)
	}
}




