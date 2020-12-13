import React from "react";
import {connect} from "react-redux";
import EventCard from "../../components/event-card/event-card";

import stringSimilarity from 'string-similarity'
import {Link} from "react-router-dom";
import UserSearchCard from "../../components/user-search-card/user-search-card";
import userService from "../../services/user-service"


class SearchUsers extends React.Component{
    state={
        all: [],
        my_friends: true,
        events: [],
        friends: []
    }


    componentDidMount = () =>{
        // fetch all users and all friends of current user
        const userId = this.props.current_user.id
        console.log(userId)
        userService.get_friends(userId)
            .then(friends => {
                console.log(friends)
                this.setState({friends}, () => {
                    userService.fetchAllUsers()
                        .then(users => {
                            let not_friends = []
                            for (let i = 0; i < users.length; i++) {
                                let user = users[i]
                                if (!this.state.friends.some(f => user.id === f.id)) {
                                    not_friends.push(user)
                                }
                            }

                            this.setState({all: not_friends})
                        })
                })
            })

        //fetch here
        // let {results} = this.props
        // this.setState({results: results, all:results}, ()=>{
        //     let {search} = this.props.match.params
        //     if(search){
        //         this.setState({search:search}, ()=>{
        //             this.searchUsers();
        //         })
        //
        //     }
        //     else{
        //         this.setState({results: this.state.all})
        //     }
        // });


    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // if (prevProps.match.params !== this.props.match.params) {
        //     const {userId} = this.props.match.params
        //     if (userId) {
        //         this.getUserFriends(userId)
        //     }
        // }
        // if(prevProps.match.params.search !== this.props.match.params.search){
        //     let {search} = this.props.match.params
        //     if(search){
        //         this.setState({search:search})
        //         this.searchUsers();
        //     }
        //     else{
        //         this.setState({results: this.state.all})
        //     }
        // }

    }

    displayFriends = () => {
        this.setState({my_friends: true})
    }

    displayAll = () => {
        this.setState({my_friends: false})
    }

    // searchUsers = () => {
    //
    //     let search = this.format(this.state.search)
    //     if(search.trim() === "") this.setState({results:this.state.all})
    //     let new_results = this.state.all.filter(u =>
    //         stringSimilarity.compareTwoStrings(this.format(this.getName(u)), search) >= 0.3)
    //
    //     this.setState({results:new_results})
    // }
    //
    // format = (str) => str.trim().toLowerCase();
    // getName = (user) => user.first_name + user.last_name

    render(){
        return(
            <div className="container d-flex flex-column w-75 mt-5">
                <h1 className="ml-3">Friends</h1>
                <div className="d-flex justify-content-evenly flex-fill mt-3">
                    <button className="form-control ml-3 mr-2" onClick={() => this.setState({my_friends: true})}> All users</button>
                    <button className="form-control" onClick={() => this.setState({my_friends: true})}> Your friends</button>
                    {/*<input className="form-control" placeholder="Search friends..." value={this.state.search}*/}
                    {/*       onChange={(e)=> this.setState({search:e.target.value})}/>*/}
                    {/*<Link to={`/searchUsers/${this.state.search}`} className="ml-3 w-25">*/}
                    {/*    <button className="form-control search-btn ">Search</button></Link>*/}
                </div>
                <div className="search-results container  m-auto">
                    {/*{this.state.results.map(u => <UserSearchCard {...u}/>)}*/}
                    {
                        this.state.my_friends ?
                            this.state.friends.map(u => {
                                return <UserSearchCard user={u} friend={true}/>
                            })
                     :
                            this.state.all.map(u => {
                                return <UserSearchCard user={u} friend={false}/>
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


export default connect
(mapStateToProps)(SearchUsers);
