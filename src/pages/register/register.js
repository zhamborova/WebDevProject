import React from "react";
import {Link} from "react-router-dom";
import './register.css'
import {InputField} from "../../components/input-field/input-field";
import {create_user} from "../../redux/actions/user-actions";
import {connect} from "react-redux";


export class Register extends React.Component {
	state = {
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		location: {city:"", country:"", street:""},
		bio: "",
		friends: [],
		events: [],
		image: ""
	}


	update= (field, event) => this.setState({[field]: event.target.value})


	submitCredentials = (user) => {
	    this.props.create_user(user).then(id => this.props.history.push(`/users/${id}`) )

	}


	render() {
		return(
			<div>


				<div className="container-fluid d-flex justify-content-center align-content-center project-register-container">
					<div>
						<h1>Register</h1>
						<div>
							<InputField fieldName={"First Name"} name="first_name" update={this.update}/>
							<InputField fieldName={"Last Name"}  name="last_name"update={this.update}/>
							<InputField fieldName={"Email"}      name="email"    update={this.update}/>
							<InputField fieldName={"Password"}   name="password" update={this.update}/>

							<div className="form-group row">
								<div className="col-sm-10">
									<Link to='#'
										  className="btn project-register-button btn-block"
										  id="registerBtn"
										  onClick={() => this.submitCredentials(this.state)}>
										Register
									</Link>
								</div>
							</div>
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


const stateToPropertyMapper = (state) => {
	return {user: state.users.current_user}
}

const mapDispatchToProps = dispatch => ({
	create_user: (user) => create_user(dispatch, user)

})

export default connect(stateToPropertyMapper, mapDispatchToProps)(Register);
