import React from "react";
import {Link,} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight,  faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

import './user-profile.css'


import {fetchUserById, get_events_for_user} from "../../services/user-service";
import UserCard from "../../components/user-card/user-card";
import EventCard from "../../components/event-card/event-card";
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
     let fL = friends.length < 5 ? "justify-content-start" : "justify-content-between"
     let ev = events.length < 3 ? "justify-content-start" : "justify-content-between"
     let em = events.length < 3 ? "mr-2": ""
        return  <div className="user-container d-flex flex-column">
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

                            <Link to={`/users/${this.state.id}/create`}
                                  className="settings-link mt-3">
                                <span className="pb-2 pt-2 pr-2">Create Event</span>
                                <FontAwesomeIcon className="settings-arrow " icon={faLongArrowAltRight}/>
                            </Link>

                        </div>
                        : null
                    }

                </div>
            </div>


        </div>
        <div className="user-friends mb-5">
            <div className="flex-column flex-md-row">
                <div className={"row"}>
                <h3>Friends</h3>
                <Link to={`/users/${this.state.id}/friends`} className="ml-auto mr-1">View all
                </Link>
                <FontAwesomeIcon className="mt-1 " icon={faLongArrowAltRight}/>
                </div>
            </div>
            <div className={`d-flex flex-column flex-md-row ${fL}`}>
                {friends.slice(0,5).map(p => {
                    return<UserCard id={p}
                                      className={"mr-2"}
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
            <div className={`d-flex flex-column flex-md-row ${ev}`}>
                {events.slice(0, 3).map(e => <div key={e.id} className={`${em}`}>
                                                    <EventCard
                                                        event={e}
                                                              vertical={false}/></div>)}
            </div>

        </div>
    </div>
}

}

const matchStateToProps = (state) => ({

    user: state.users.current_user
})

export default connect(matchStateToProps)(UserProfile);

