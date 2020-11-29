import React from "react";
import {Link} from "react-router-dom";
import './navbar.css'

export class NavBar extends React.Component {
	render() {
		return(
			<div className="sticky">
				<ul>
					<li className="logo-nav">
						<Link to={'/'}>Logo</Link>
					</li>
					<li className="news-nav">
						<Link to={'/search-news'}>News</Link>
					</li>
					<li className="events-nav">
						<Link to={'/events'}>Events</Link>
					</li>
					<li className="profile-nav-float-right">
						<Link to={'/users/123/'}>Profile</Link>
					</li>

					<li>
						<Link to={'/register'}>Register</Link>
					</li>
					<li>
						<Link to={'/login'}>Login</Link>
					</li>
				</ul>
			</div>

		)
	}
}

