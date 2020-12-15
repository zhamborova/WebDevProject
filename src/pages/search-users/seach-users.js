import React from "react";
import {connect} from "react-redux";
import EventCard from "../../components/event-card/event-card";

import stringSimilarity from 'string-similarity'
import {Link} from "react-router-dom";
import UserSearchCard from "../../components/user-search-card/user-search-card";
import FriendCard from "../../components/friend-card/friend-card"
import userService from "../../services/user-service"
import {setCurrentUser,} from "../../redux/actions/user-actions";

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
        return {windowWidth: window.innerWidth};
    }

    fetchUsers = (u={}) => {
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
        let my_friends = this.state.my_friends ? "btn-success" : "btn-outline-secondary";
        let all_users = !this.state.my_friends ? "btn-success" : "btn-outline-secondary";
        return(
            <div className="container d-flex flex-column w-75 mt-5">
                <h1 className="ml-3">Friends</h1>
                        <div className="d-flex justify-content-evenly flex-fill mt-3">
                        <button className={`form-control ml-3 mr-2 btn ${all_users}`}
                                onClick={() => this.setState({my_friends: false})}> All users</button>
                        <button className={`form-control ml-3 mr-2 btn ${my_friends}`}
                                onClick={() => this.setState({my_friends: true})}> Your friends</button>
                        </div>


                <div className="search-results container  m-auto">
                    {this.state.my_friends ?
                            this.state.friends.map(u => {
                                return <FriendCard user={u} current={this.props.current_user} isFriend={true}
                                                   userFriends={u.friends}
                                                   updateCurrentUser={this.fetchUsers}
                                                   screenSize = {this.getInitialState().windowWidth}/>
                            })
                     :
                            this.state.all.map(u => {
                                return <FriendCard user={u} current={this.props.current_user} isFriend={false}
                                                   userFriends={u.friends}
                                                   updateCurrentUser={this.fetchUsers}
                                                   screenSize = {this.getInitialState().windowWidth}/>
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



export default connect
(mapStateToProps, propertyToDispatchMapper)(SearchUsers);
