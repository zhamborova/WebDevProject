import React from "react";
import UserCard from "../../components/user-card/user-card";
import {Link,} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight,  faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import EventCard from "../../components/event-card/event-card";
import './user-profile.css'

import {fetchUserById, get_events_for_user} from "../../services/user-service";
import {connect} from "react-redux";



class UserProfile  extends  React.Component{

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


  componentDidMount() {
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
     let {id,first_name, last_name, location, bio, events, friends, image} = this.state;
     let fL = friends.length < 5 ? `justify-start` : `justify-between`
     let eL = events.length < 5 ? `justify-start` : `justify-between`
    return <div className="user-container d-flex flex-column">
        <div className="user-description mb-5">
            <div className="row ">
                <div className="profile-image col-3 mr-2">
                    <img src={image}/>
                </div>
                <div className="profile-bio col-8">
                    <p className="font-weight-bold mb-0">{first_name} {last_name} </p>

                    <p>
                        <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt}/>
                        {location.city}, {location.country}</p>
                    <p>{bio}</p>
                    {this.props.user.id === id ?

                        <div>

                        <Link to={`/users/${id}/settings`} className="settings-link">
                            <span className="pb-2 pt-2 pr-2">Settings</span>
                            <FontAwesomeIcon className="settings-arrow " icon={faLongArrowAltRight}/>
                        </Link>
                        <button className="btn btn-outline-success create-button-padding"><Link to={`/users/${this.state.id}/create`}>Create Event</Link></button>
                        </div>
                        : null
                    }

                </div>
            </div>


        </div>
        <div className="user-friends mb-5">
            <div className="d-flex">
                <h3>Friends</h3>
                <Link to={`/users/${this.state.id}/friends`} className="ml-auto mr-1">View all
                </Link>
                <FontAwesomeIcon className="mt-1 " icon={faLongArrowAltRight}/>
            </div>
            <div className={`d-flex ${fL}`}>
                {friends.slice(0,5).map(p => {
                    return <UserCard id={p}
                                      key={p}
                                      host={false}
                                      profileView
                                      editing={false}/>
                })}

            </div>
        </div>
        <div className="user-events mb-4">
            <div className="d-flex">
                <h3>Events</h3>
                <Link to={`/users/${this.state.id}/events`} className="ml-auto mr-1">View all</Link>
                <FontAwesomeIcon className="mt-1 " icon={faLongArrowAltRight}/>
            </div>
            <div className={`d-flex ${eL}`}>
                {events.slice(0, 3).map(e => <EventCard key={e.id}
                                                        event={e}
                                                        vertical={false}/>)}
            </div>

        </div>
    </div>
}

}

const matchStateToProps = (state) => ({

    user: state.users.current_user
})

export default connect(matchStateToProps)(UserProfile);

