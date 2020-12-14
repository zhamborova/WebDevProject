import React from "react";
import {connect} from "react-redux";
import EventCard from "../../components/event-card/event-card";
import {fetchUserById, get_events_for_user} from "../../services/user-service";


export class UserEvents extends React.Component {

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
        get_events_for_user(userId).then(events =>{
            this.setState({events})})

    }

    render(){
        let {events} = this.state;
        return(
            <div className="container d-flex flex-column w-75 mt-5">
                <h1 className="ml-3">Events</h1>
                <div className="search-results container row m-auto">
                    {events.map(e => <EventCard event={e} key={e.id} vertical />)}
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.users.current_user
})

export default connect
(mapStateToProps)(UserEvents);
