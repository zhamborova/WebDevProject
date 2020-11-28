
import React from "react";
import {connect} from "react-redux";


class TestingCurrentUser extends React.Component {

    currentUser = {}


    render() {
        console.log(this.props)
        return(
            <div>
                <div> Current User: </div>
                <div> {this.props.currentUser.email}</div>
            </div>
        )
    }


}





const stateToPropertyMapper = (state) => ({
    currentUser: state.users.current_user
})

export default connect(stateToPropertyMapper)(TestingCurrentUser);

