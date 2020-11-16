import React from "react";
import {connect} from "react-redux";
import EventCard from "../../components/event-card/event-card";

import stringSimilarity from 'string-similarity'
import {Link} from "react-router-dom";
import UserSearchCard from "../../components/user-search-card/user-search-card";


class SearchUsers extends React.Component{
    state={
        search: "",
        results: [],
        all: []
    }


    componentDidMount = () =>{
        let {results} = this.props
        this.setState({results: results, all:results}, ()=>{
            let {searchUser} = this.props.match.params
            if(searchUser){
                console.log(searchUser)
                this.setState({search:searchUser}, ()=>{
                    this.searchEvents();
                })

            }
        });


    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.match.params.search !== this.props.match.params.search){
            let {searchUser} = this.props.match.params
            if(searchUser){
                this.setState({search:searchUser})
                this.searchEvents();
            }
        }

    }


    searchEvents = () => {
        let search = this.format(this.state.search)
        let new_results = this.state.all.filter(u =>
            stringSimilarity.compareTwoStrings(this.format(this.getName(u)), search) >= 0.3)
        console.log(stringSimilarity.compareTwoStrings("brian", "bryanyoung"))
        this.setState({results:new_results})
    }

    format = (str) => str.trim().toLowerCase();
    getName = (user) => user.first_name + user.last_name

    render(){
        return(
            <div className="container d-flex flex-column w-75 mt-5">
                <h1 className="ml-3">Friends</h1>
                <div className="d-flex container  ">
                    <input className="form-control" placeholder="Search friends..." value={this.state.search}
                           onChange={(e)=> this.setState({search:e.target.value})}/>
                    <Link to={`/users/:userId/friends/${this.state.search}`} className="ml-3 w-25">
                        <button className="form-control search-btn ">Search</button></Link>
                </div>
                <div className="search-results container  m-auto">
                    {this.state.results.map(u => <UserSearchCard {...u}/>)}
                </div>
            </div>


        )
    }

}

const mapStateToProps = (state) =>{

    return{results: state.users.users}

}

export default connect(mapStateToProps)(SearchUsers);
