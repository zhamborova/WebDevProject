import React from "react";
import {Link} from "react-router-dom";
import './login.css'
import {InputField} from "../../components/input-field/input-field";
import {login} from "../../services/user-service";
import {connect} from "react-redux";
import {setCurrentUser} from "../../redux/actions/set-current-user-action"


export class Login extends React.Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: ''
	}
	currentUser = {
	}

	isValid = false

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

	submitCredentials = (user) => {
		console.log("Here is the data to be sent:")
		console.log(this.state);
		console.log("Here is the logged in user:")

		// call user-service and get the response
		login(user).then(returnedUser => {
			if (returnedUser['firstName'] === 'none') {
				console.log("Could not authenticate")
			} else {
				console.log('Success')
				this.currentUser = returnedUser
				console.log("Here is the new current user after logging in!")
				console.log(this.currentUser)
			}
		})
		this.props.setCurrentUser(this.currentUser)
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

const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({
	setCurrentUser: (currentUser) => setCurrentUser(dispatch, currentUser)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Login)
