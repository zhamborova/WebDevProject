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
	}


	update= (field, event) => this.setState({[field]: event.target.value})

     submitCredentials = (user) => {
		login(user).then(response => {
			if(response[0] !== "failure") {
				let user = response[0]
				this.props.setCurrentUser(user)
				this.props.history.push(`/users/${user.id}`)

			}else {
				window.alert("Login or password are incorrect :(")
			}
		})
	}


	render() {
		return(

				<div className="container-fluid d-flex justify-content-center
				 align-content-center project-login-container">
						<div>
							<h1>Login</h1>
							<InputField fieldName={"Email"} name="email" update={this.update}/>
							<InputField fieldName={"Password"} name="password" update={this.update}/>
						<div className="form-group row">
							<div className="col-sm-10">
								<Link to='#'
									  className="btn btn-block project-login-button" id="loginBtn"
									  onClick={() => this.submitCredentials(this.state)}>
									Login
								</Link>
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

export default connect(()=>({}), propertyToDispatchMapper)(Login)
