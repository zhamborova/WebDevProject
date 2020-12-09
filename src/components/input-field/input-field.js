import React from "react";

export class InputField extends React.Component {
	render() {
		return(
			<div className="form-group d">
				<div className="col-sm-12 col-form-label">{this.props.fieldName}</div>
					<div className="col-sm-10">
						 <input
								className="form-control"
								onChange={(event) => this.props.update(this.props.name, event)}
						 />

					</div>
				</div>

		)
	}
}
