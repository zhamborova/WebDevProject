import React from "react";
import {Link} from "react-router-dom";
import './navbar.css'
import {connect} from "react-redux";
import {setCurrentUser} from "../../redux/actions/user-actions";

export class NavBar extends React.Component {
	state = {
		current_user: {},
		current_user_id: null
	}

	componentDidMount() {
		console.log("NavBar comp did mount props: ")
		console.log(this.props)
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("comp update navbar")
		console.log(this.props)
	}

	render() {
		return(

			<div>
				<div className="sticky">
					<ul>
						<li className="logo-nav">
							<Link to={'/'}>Home</Link>
						</li>
						<li className="news-nav">
							<Link to={'/search-news'}>News</Link>
						</li>

						{this.props.current_user_id !== undefined &&
						<li className="events-nav">
							<Link to={'/events'}>Events</Link>
						</li>
						}

						{this.props.current_user_id !== undefined &&
						<li className="profile-nav-float-right">
							<Link to={`/users/${this.props.current_user_id}`}>
								<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-circle"
									 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
									<path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
									<path fill-rule="evenodd"
										  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
								</svg>
							</Link>
						</li>
						}


						{this.props.current_user_id === undefined &&
						<li className="float-right loginRegister-nav">
							<Link to={'/register'}>Register</Link>
						</li>
						}
						{this.props.current_user_id === undefined &&
						<li className="float-right loginRegister-nav">
							<Link to={'/login'}>Login</Link>
						</li>
						}

						{this.props.current_user_id !== undefined &&
						<li>
							<Link to="/" onClick={() => this.props.setCurrentUser({})}>Log Out</Link>
						</li>
						}

					</ul>
				</div>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		current_user: state.users.current_user,
		current_user_id: state.users.current_user.id
	}
}

const propertyToDispatchMapper = dispatch => ({
	setCurrentUser: (current_user) => setCurrentUser(dispatch, current_user)
})

export default connect(mapStateToProps, propertyToDispatchMapper)(NavBar)
