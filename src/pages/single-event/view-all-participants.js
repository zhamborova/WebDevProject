import React from "react";
import UserCard from "../../components/user-card/user-card";
import {get_users_for_event} from "../../services/events-service";
import {Link} from "react-router-dom";
import EventCard from "../../components/event-card/event-card";


class ViewAllParticipants extends React.Component {
    state = {
        users: this.props.location.state.people
    }

    componentDidMount() {
        console.log("Here is our list now");
        console.log(this.state.users)
    }

    render() {
        return (
            <div className="container d-flex flex-column w-75 mt-5">
                <h1 className="ml-3">Participants</h1>

                <div className="search-results container row m-auto ">
                    {this.state.users.map(p => {
                        return <UserCard key={p} id={p}/>
                    })}
                </div>


            </div>
        )
    }
}


export default ViewAllParticipants
