import React from "react";
import {Link} from "react-router-dom";
import './navbar.css'
import {connect} from "react-redux";
import {logout, setCurrentUser} from "../../redux/actions/user-actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

export class NavBar extends React.Component {
	render() {
		return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to={"/"} className="navbar-brand" href="#">CleanUp</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav d-flex">

						<li className="nav-item">
							<Link to={"/search-news"} className="nav-link" >News</Link>

						</li>

						{this.props.current_user &&
						<>
						<li className="nav-item">
							<Link to={`/events`} className="nav-link ">Events</Link>
						</li>
							<li className="nav-item">
							<Link to={`/users`}className="nav-link " >People</Link>

							</li>
							<li className="nav-item profile">
							  <Link to={`/users/${this.props.current_user.id}`}>
							  <FontAwesomeIcon className="profile-icon " icon={faUserCircle}/>
							</Link>
							</li>
							<li className="nav-item ">
							<Link to="/" className="nav-link "
							onClick={() => this.props.logout()}>Log Out</Link></li>
						</>
						}
						{!this.props.current_user &&
							<>
						<li className="nav-item sign-in">
							<Link to={`/sign-in`}className="nav-link " >Sign In</Link>

						</li>
						<li className="nav-item">
							<Link to={`/sign-up`}className="nav-link " >Sign Up</Link>

						</li>
						</>
						}
					</ul>
				</div>
			</nav>

		)
	}
}

// 	<div className="sticky">
// 		<ul>
//
// 			<li className={"logo-nav"} >
// 				<Link to={'/'}>Home</Link>
// 			</li>
// 			<li className={"news-nav "}>
// 				<Link to={'/search-news'}>News</Link>
// 			</li>
//
// 			{this.props.current_user  &&
// 				<>
// 			<li className="events-nav">
// 				<Link to={'/events'}>Events</Link>
// 			</li>
//
// 			<li className="events-nav">
// 				<Link to={`/users/${this.props.current_user.id}/create`}>Create Event</Link>
// 			</li>
//
// 			<li className="events-nav">
// 				<Link to={`/users`}>People</Link>
// 			</li>
// 			<li className="float-right">
// 				<Link to="/" onClick={() => this.props.logout()}>Log Out</Link>
// 			</li>
// 			<li className="float-right">
// 				<Link to={`/users/${this.props.current_user.id}`}>
// 				<FontAwesomeIcon className="profile-icon" icon={faUserCircle}/>
// 				</Link>
// 			</li>
// 			</>
// 			}
//
// 			{!this.props.current_user &&
// 			<li className="float-right loginRegister-nav">
// 				<Link to={'/sign-up'}>Register</Link>
// 			</li>
// 			}
//
// 			{!this.props.current_user &&
// 			<li className="float-right loginRegister-nav">
// 				<Link to={'/sign-in'}>Login</Link>
// 			</li>
// 			}
//
//
//
// 		</ul>
// </div>

const mapStateToProps = (state) => {
	return {
		current_user: state.users.current_user
	}
}

const propertyToDispatchMapper = dispatch => ({
	setCurrentUser: (current_user) => setCurrentUser(dispatch, current_user),
	logout: () => logout(dispatch)
})

export default connect(mapStateToProps, propertyToDispatchMapper)(NavBar)
