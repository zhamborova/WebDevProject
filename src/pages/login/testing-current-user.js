
import React from "react";
import {connect} from "react-redux";


class TestingCurrentUser extends React.Component {

    currentUser = {}


    render() {
        return(
            <div>
                <div> Current User: </div>
                <div> {this.state.currentUser.email}</div>
            </div>
        )
    }


}





const stateToPropertyMapper = (state) => ({
    currentUser: state.setCurrentUserReducer.currentUser
})

export default connect(stateToPropertyMapper)(TestingCurrentUser);

