import React from "react";
import {Link} from "react-router-dom";
import './login.css'
import {InputField} from "../../components/input-field/input-field";
import {login} from "../../services/user-service";
import {connect} from "react-redux";
import {setCurrentUser} from "../../redux/actions/user-actions"
import {Redirect} from "react-router";


export class Login extends React.Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		current_user: {},
		loginStatus: "initial"
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const lastStatus = prevState.loginStatus;
		const newStatus = this.state.loginStatus;
		if (lastStatus !== this.state.loginStatus) {
			this.setState({loginStatus: newStatus})
		}
		console.log("We are in component did update, here is the old status: " + lastStatus)
		console.log("We are in component did update, here is the new status: " + newStatus)
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
		console.log("We are in submit credentials")
		 //login(user).then(response => console.log("Response status " + response.status))
		 login(user).then(response => this.setState({
			 current_user: {
				 id: response.id,
				 first_name: response.firstName,
				 last_name: response.lastName,
				 bio: response.bio,
				 location: response.location,
				 friends: response.friends,
				 events: response.events,
				 email: response.email,
			 },

			 loginStatus: response.loginStatus}))

		 this.setState({loginStatus: "loading"})
	}


	render() {
		return(
			<div>

				<div className="container-fluid d-flex justify-content-center align-content-center project-login-container">

					<div>


						{this.state.loginStatus !== "success" &&
						<div>
							<h1>Login</h1>
							<InputField fieldName={"Email"} updateEmail={(e) => this.updateEmail(e)}/>
							<InputField fieldName={"Password"} updatePassword={(e) => this.updatePassword(e)}/>
						</div>
						}

						<div className="form-group row">
							<div className="col-sm-10">
								{this.state.loginStatus === "initial" &&
								<Link to='#'
									  className="btn btn-block project-login-button" id="loginBtn"
									  onClick={() => this.submitCredentials(this.state)}>
									Login
								</Link>
								}

								{this.state.loginStatus === "success" &&
								<div>
									Success!
									<Redirect to='/'>{this.props.setCurrentUser(this.state.current_user)}</Redirect>
								</div>

								}

								{this.state.loginStatus === "unsuccessful" &&
								<div>
									Sorry, credentials are invalid, try again
									<Link to='#'
										  className="btn btn-block project-login-button" id="loginBtn"
										  onClick={() => this.submitCredentials(this.state)}>
										Login
									</Link>
								</div>

								}

								{this.state.loginStatus === "loading" &&
								<div>Loading, please wait...</div>
								}

							</div>
						</div>

						{this.state.loginStatus !== "success" &&
						<div>
							<div>
								<a href="#">Forgot Password?</a>
							</div>

							<div>
								<Link to={'/register'}>Not registered yet? Sign Up</Link>
							</div>
						</div>
						}

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
