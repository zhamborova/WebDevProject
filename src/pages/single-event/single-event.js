import React from 'react';
import './single-event.css'
import img1 from '../../assets/Ellipse 1.png';
import img2 from '../../assets/Ellipse 2.png';
import img3 from '../../assets/Ellipse 3.png'
import img4 from '../../assets/Ellipse 4.png'


import host_img from '../../assets/Ellipse 1.png'
import event_img from '../../assets/lake.png'
import UserCard from "../../components/user-card/user-card";
const event = {

    title: "Lake Baikal cleanup",
    host_name: "Bryan Young",
    host_img: host_img,
    event_img: event_img,
    event_date:{startTime: "", endTime: "", date: ""},
    event_location: {street: "", city:"", state: "", country: "", zip: ""},
    event_dscrp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    event_tags: ["hashtag1", "hashtag2", "community-service",],
    participants: [1,2,3,4]
}

const participantsList = {
    1: { first_name: "Bryan", last_name: "Young", host: true, img: img1, url: ""},
    2: { first_name: "Debby", last_name: "Williams", host: false, img: img2,url: ""},
    3: { first_name: "Enola", last_name: "Holmes", host: false, img: img3,url: ""},
    4: { first_name: "Michelle", last_name: "Yang", host: false, img: img4,url: ""},
}

class SingleEvent extends React.Component{

    render() {
        const {title, host_name, host_img, event_img,
            event_dscrp, event_tags, participants} = event
        return (
            <div className="d-flex flex-column single-event-container">
                <h4 className="event-title">{title}</h4>
                <div className="event-hosted-by-container d-flex flex-column">
                    <div className="host-info">
                 <img src={host_img} className="host-img" />
                 <div className="event-hosted-by">
                     <span>Hosted by</span>
                     <span className="host-name">{host_name}</span>
                 </div>
                    </div>
                 <div className="event-description-container row ">
                     <div className="event-description col-8 p-0">
                         <img src={event_img} className={"event-img"} />
                         <h5 >Description</h5>
                         <p>{event_dscrp}</p>
                     </div>
                     <div className="event-details col-4 ">
                         <div className="details-inner-div">
                         <div className="event-time-location">
                             <div className="event-time">
                             <p className="event-date mb-0">Wednesday, October 22</p>
                             <p className="event-time"> 10:00am - 12:00pm </p>
                             </div>
                             <div className="event-date">
                              <p className="event-loc-city mb-0">Lake Baikal</p>
                              <p className="event-loc-city">Siberia, Russia</p>
                             </div>
                         </div>
                         <div className="event-tags mt-3">
                                 <ul className="nav">
                             {event_tags.map(tag=>
                                 <li className="nav-item">
                                     {tag}
                                 </li>
                             )}
                             </ul>
                         </div>
                         </div>
                     </div>
                 </div>
                </div>
                <div className="event_participation">
                    {participants.map(p => {
                        return <UserCard p={participants[p]} />
                    })}
                </div>
            </div>
        );
    }

}

export default SingleEvent;
