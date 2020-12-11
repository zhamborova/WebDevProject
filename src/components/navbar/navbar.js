import React from "react";
import {Link} from "react-router-dom";
import './navbar.css'
import {connect} from "react-redux";
import {logout, setCurrentUser} from "../../redux/actions/user-actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

export class NavBar extends React.Component {
	render() {
		return(
				<div className="sticky">
					<ul>
						<li className="logo-nav">
							<Link to={'/'}>Home</Link>
						</li>
						<li className="news-nav">
							<Link to={'/search-news'}>News</Link>
						</li>
						{this.props.current_user  &&
						<li className="events-nav">
							<Link to={'/events'}>Events</Link>
						</li>
						}
						{this.props.current_user &&
						<li className="profile-nav-float-right">
							<Link to={`/users/${this.props.current_user.id}`}>
							<FontAwesomeIcon className="profile-icon" icon={faUserCircle}/>
							</Link>
						</li>
						}

						{!this.props.current_user &&
						<li className="float-right loginRegister-nav">
							<Link to={'/sign-up'}>Register</Link>
						</li>
						}
						{!this.props.current_user &&
						<li className="float-right loginRegister-nav">
							<Link to={'/sign-in'}>Login</Link>
						</li>
						}

						{this.props.current_user  &&
						<li>
							<Link to="/" onClick={() => this.props.logout()}>Log Out</Link>
						</li>
						}

					</ul>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		current_user: state.users.current_user
	}
}

const propertyToDispatchMapper = dispatch => ({
	setCurrentUser: (current_user) => setCurrentUser(dispatch, current_user),
	logout: () => logout(dispatch)
})

export default connect(mapStateToProps, propertyToDispatchMapper)(NavBar)
