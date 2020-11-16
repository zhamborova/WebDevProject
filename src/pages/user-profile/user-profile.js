import React from "react";
import {delete_event, update_event} from "../../redux/actions/event-actions";
import {connect} from "react-redux";
import img4 from "../../assets/Ellipse 4.png";
import img2 from "../../assets/Ellipse 2.png";
import img3 from "../../assets/Ellipse 3.png";
import UserCard from "../../components/user-card/user-card";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight, faMapMarkedAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import EventCard from "../../components/event-card/event-card";
import './user-profile.css'
import img from '../../assets/Ellipse1.png'
const participantsList = [ { id:123, first_name: "Michelle", last_name: "Steel",  img: img4,url: ""},

    { id:345, first_name: "Tom", last_name: "Holmes", img: img3,url: ""},
    { id:123, first_name: "Michelle", last_name: "Steel",  img: img4,url: ""},
    { id:345, first_name: "Tom", last_name: "Holmes", img: img3,url: ""},
    { id:123, first_name: "Michelle", last_name: "Steel",  img: img4,url: ""},
,


]


const user = {
        id: 234,
        first_name: "Bryan",
        last_name: "Young",
        img: img2,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q" +
            "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit i" +
            "n voluptate velit esse cillum dolore eu fugiat nulla.",
        location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
        friends: [123, 234, 345, 345, 123],
        events: [1,2,3,4,5],
      email: "efe@gmail.com"
}




const UserProfile = (props) => {
  let {id,first_name, last_name, location, bio, friends} = user;
  let {events} = props;
  return <div className="user-container d-flex flex-column">
      <div className="user-description mb-5">
          <div className="row ">
              <div className="profile-image col-3 mr-2">
                  <img src={img} />
              </div>
              <div className="profile-bio col-8">
                  <p className="font-weight-bold mb-0">{first_name} {last_name} </p>

                  <p>
                      <FontAwesomeIcon  className="mr-2" icon={faMapMarkerAlt}/>
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
              <Link to={'/search-news'} className="ml-auto mr-1">View all
              </Link>
              <FontAwesomeIcon className="mt-1 " icon={faLongArrowAltRight}/>
          </div>
          <div className="d-flex justify-content-between">
          {participantsList.slice(0, 5).map(p => {

              return <UserCard p={p} key={p.id}
                                host={id === p.id}
                                profileView
                                editing={false}/>
          })}

          </div>
      </div>
      <div className="user-events mb-4">
              <div className="d-flex">
                  <h3>Events</h3>
                  <Link to={'/events'} className="ml-auto mr-1">View all</Link>
                  <FontAwesomeIcon className="mt-1 "  icon={faLongArrowAltRight}/>
              </div>
              <div className="row justify-content-between ">
                  {events.slice(0,3).map(e => <EventCard event={e}
                                                         key={e.id}
                                                         vertical={false}/>)  }
              </div>

      </div>
      </div>


}

const mapStateToProps = (state, ownProps) =>{
     let id = ownProps.match.params.userId
    // let friendIds = ownProps.friends
    // let friends = state.users.filter(user-profile => friendIds.includes(user-profile.id))
    return{  events: state.events.events}

}


const mapDispatchToProps = dispatch => ({
    delete_event: (id) => delete_event(id, dispatch),
    update_event: (event) => update_event(event, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

