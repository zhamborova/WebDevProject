import React from "react";

export class InputField extends React.Component {
	render() {
		return(
			<div>
				<div className="form-group row">

					<div>
						<div className="col-sm-12 col-form-label">{this.props.fieldName}</div>
					</div>
					<div className="col-sm-10">
						{this.props.fieldName === "First Name" &&
						 <input
								className="form-control"
								onChange={(event) => this.props.updateFirst(event)}
						 />
						}
						{this.props.fieldName === "Last Name" &&
						 <input
								className="form-control"
								onChange={(event) => this.props.updateLast(event)}
						 />
						}
						{this.props.fieldName === "Email" &&
						 <input
								className="form-control"
								onChange={(event) => this.props.updateEmail(event)}
						 />
						}
						{this.props.fieldName === "Password" &&
						 <input type="password"
								className="form-control"
								onChange={(event) => this.props.updatePassword(event)}
						 />
						}

					</div>
				</div>
			</div>
		)
	}
}
