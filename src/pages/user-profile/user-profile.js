import React from "react";
import {connect} from "react-redux";
import UserCard from "../../components/user-card/user-card";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight,  faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import EventCard from "../../components/event-card/event-card";
import './user-profile.css'

import {render} from "react-dom";
import {fetchUserById, get_events_for_user, get_friends} from "../../services/user-service";



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
      fetchUserById(userId).then(user => this.setState({...user}, )).then(()=>{
          get_friends(this.state.friends).then(friends => this.setState({friends}))
      })

      get_events_for_user(userId).then(events =>{
          this.setState({events})})}




    render(){
     let {id,first_name, last_name, location, bio, events, friends, image} = this.state;
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
                    <Link to={`/users/${id}/settings`} className={"settings-link"}>
                        <span className="p-2">Settings</span>
                        <FontAwesomeIcon className="settings-arrow " icon={faLongArrowAltRight}/>
                    </Link>

                </div>
            </div>


        </div>
        <div className="user-friends mb-5">
            <div className="d-flex">
                <h3>Friends</h3>
                <Link to={'/searchUsers/'} className="ml-auto mr-1">View all
                </Link>
                <FontAwesomeIcon className="mt-1 " icon={faLongArrowAltRight}/>
            </div>
            <div className="d-flex justify-content-between">
                {friends.slice(0, 5).map(p => {
                    return <UserCard id={p} key={p.id}
                                      host={false}
                                      profileView
                                      editing={false}/>
                })}

            </div>
        </div>
        <div className="user-events mb-4">
            <div className="d-flex">
                <h3>Events</h3>
                <Link to={'/events'} className="ml-auto mr-1">View all</Link>
                <FontAwesomeIcon className="mt-1 " icon={faLongArrowAltRight}/>
            </div>
            <div className="row justify-content-between ">
                {events.slice(0, 3).map(e => <EventCard key={e.id}
                                                        event={e}
                                                        vertical={false}/>)}
            </div>

        </div>
    </div>
}

}


export default UserProfile;

