import React from "react";
import {Link} from "react-router-dom";
import './login.css'
import {InputField} from "../../components/input-field/input-field";
import {login} from "../../services/user-service";
import {connect} from "react-redux";
import {setCurrentUser} from "../../redux/actions/user-actions"


export class Login extends React.Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		current_user: {}
	}



	updateEmail = (event) => {
		this.setState({
						  email: event.target.value
					  })

	}

	updatePassword = (event) => {
		this.setState({
						  password: event.target.value
					  })

	}

     submitCredentials = (user) => {
         this.props.setCurrentUser(this.state)
		// call user-service and get the response

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
							<div className="col-sm-10">
								<Link to='/'
									  className="btn btn-block project-login-button" id="loginBtn"
									  onClick={() => this.submitCredentials(this.state)}>
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



const propertyToDispatchMapper = dispatch => ({
	setCurrentUser: (current_user) => setCurrentUser(dispatch, current_user)
})

export default connect(()=>{}, propertyToDispatchMapper)(Login)
