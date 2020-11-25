import React from "react";
import {Link} from "react-router-dom";
import './navbar.css'

export class NavBar extends React.Component {
	render() {
		return(
			<div className="sticky">
				<ul>
					<li>
						<Link to={'/'}>Logo</Link>
					</li>
					<li>
						<Link to={'/news'}>News</Link>
					</li>
					<li>
						<Link to={'/events'}>Events</Link>
					</li>
					<li className="float-right">
						<Link to={'/'}>Profile</Link>
					</li>
				</ul>
			</div>

		)
	}
}

