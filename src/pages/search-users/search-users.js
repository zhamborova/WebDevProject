import React from "react";
import {connect} from "react-redux";
import EventCard from "../../components/event-card/event-card";

import stringSimilarity from 'string-similarity'
import {Link} from "react-router-dom";
import UserSearchCard from "../../components/user-search-card/user-search-card";
import FriendCard from "../../components/friend-card/friend-card"
import userService from "../../services/user-service"
import {setCurrentUser,} from "../../redux/actions/user-actions";
import Button from "@material-ui/core/Button";

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

class SearchUsers extends React.Component{
    state={
        all: [],
        my_friends: true,
        events: [],
        friends: []
    }


    componentDidMount = () =>{
        this.fetchUsers()
    }


    getInitialState = () => {
        return window.innerWidth;
    }

    fetchUsers = (u="") => {

        const userId = this.props.current_user.id
        userService.fetchUserById(userId)
            .then(current => this.props.setCurrentUser(current))
        userService.get_friends(userId)
            .then(friends => {
                this.setState({friends}, () => {
                    userService.fetchAllUsers()
                        .then(users => {
                            let not_friends = []
                            for (let i = 0; i < users.length; i++) {
                                let user = users[i]
                                if (!this.state.friends.some(f => user.id === f.id)
                                    && userId !== user.id) {
                                    not_friends.push(user)
                                }
                            }
                            this.setState({all: not_friends})
                        })
                })
            })

    }

    render(){
        let my_friends = this.state.my_friends ? "primary" : "info";
        let all_users = !this.state.my_friends ? "primary" : "info";
        return(
            <div className="container d-flex flex-column w-75 mt-5">
                <h1 className="">Friends</h1>
                        <div className="d-flex justify-content-between flex-fill mt-3">
                        <Button size="large"
                                style={{width:'80%', marginRight: "20px"}}
                                color={all_users}
                                variant="contained"
                                onClick={() => this.setState({my_friends: false})}> All users</Button>
                        <Button size="large"
                                style={{width:'80%'}}
                                color={my_friends}
                                variant="contained"
                                onClick={() => this.setState({my_friends: true})}> Your friends</Button>
                        </div>


                <div className="search-results">
                    {this.state.my_friends ?
                            this.state.friends.map(u => {
                                return <FriendCard user={u} current={this.props.current_user} isFriend={true}
                                                   userFriends={u.friends}
                                                   updateCurrentUser={this.fetchUsers}
                                                   screenSize = {this.getInitialState()}/>
                            })
                     :
                            this.state.all.map(u => {
                                return <FriendCard user={u} current={this.props.current_user} isFriend={false}
                                                   userFriends={u.friends}
                                                   updateCurrentUser={this.fetchUsers}
                                                   screenSize = {this.getInitialState()}/>
                            })
                    }
                </div>
            </div>


        )
    }

}

const mapStateToProps = (state) => ({
    current_user: state.users.current_user
})

const propertyToDispatchMapper = dispatch => ({
    setCurrentUser: (current_user) => setCurrentUser(dispatch, current_user)
})



export default connect(mapStateToProps, propertyToDispatchMapper)(SearchUsers);
