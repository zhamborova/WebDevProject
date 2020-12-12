import React from "react";
import {connect} from "react-redux";
import UserCard from "../../components/user-card/user-card";
import {fetchUserById} from "../../services/user-service";


export class UserFriends extends React.Component {

    state={
        id:"",
        first_name:"",
        last_name:"",
        location:"",
        bio:"",
        friends:[],
        image:"",
        events:[],
    }


    componentDidMount = () =>{
        let {userId} = this.props.match.params;
        this.fetch_user(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let {userId} = this.props.match.params;
        if(prevProps.match.params.userId !== userId){
            this.fetch_user(userId)
        }
    }


    fetch_user = (userId) =>{
        fetchUserById(userId).then(user => this.setState({...user} ))
    }

    render(){
        let {friends} = this.state;
        return(
            <div className="container d-flex flex-column w-75 mt-5">
                <h1 className="ml-3">Friends</h1>
                <div className="search-results container row m-auto">
                    {friends.map(p => {
                        return <UserCard id={p}
                                         key={p}
                                         host={false}
                                         profileView
                                         editing={false}
                                         vertical />
                    })}

                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.users.current_user
})

export default connect
(mapStateToProps)(UserFriends);
