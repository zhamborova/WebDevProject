import React from "react";
import {Link} from "react-router-dom";
import './register.css'
import {InputField} from "../../components/input-field/input-field";


export class Register extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	}

	updateFirst = (event) => {
		this.setState({
			firstName: event.target.value
		})
		console.log(this.state.firstName)
	}

	updateLast = (event) => {
		this.setState({
						  lastName: event.target.value
					  })
		console.log(this.state.lastName)
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
		console.log(this.state.firstName, this.state.lastName)
	}


	render() {
		return(
			<div>

				<div className="container-fluid d-flex justify-content-center align-content-center project-register-container">

					<div>

						<h1>Register</h1>

						<InputField fieldName={"First Name"} updateFirst={(e) => this.updateFirst(e)}/>

						<InputField fieldName={"Last Name"} updateLast={(e) => this.updateLast(e)}/>

						<InputField fieldName={"Email"} updateEmail={(e) => this.updateEmail(e)}/>

						<InputField fieldName={"Password"} updatePassword={(e) => this.updatePassword(e)}/>


						<div className="form-group row">
							<div className="col-sm-10">
								<Link to='#'
									  className="btn project-register-button btn-block"
									  id="registerBtn"
								onClick={() => this.submitCredentials()}>
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

			</div>

		)
	}
}
