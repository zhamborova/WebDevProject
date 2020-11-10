import React from 'react';
import './single-event.css'
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import img2 from '../../assets/Ellipse 2.png';
import img3 from '../../assets/Ellipse 3.png'
import img4 from '../../assets/Ellipse 4.png'


import host_img from '../../assets/Ellipse 1.png'
import event_img from '../../assets/lake.png'
import UserCard from "../../components/user-card/user-card";
import Location from "../../components/location/location";

const event = {

    title: "Lake Baikal cleanup",
    host_name: "Bryan Young",
    host_img: host_img,
    event_img: event_img,
    date: new Date(),
    time: "00:00",
    location: {street: "", city:"", state: "", country: "", zip: ""},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    tags: ["hashtag1", "hashtag2", "community-service",],
    participants: [1,2,3,]
}

const participantsList = {
    2: { first_name: "Michelle", last_name: "Steel", host: false, img: img4,url: ""},
    1: { first_name: "Bryan", last_name: "Young", host: true, img: img2,url: ""},
    3: { first_name: "Tom", last_name: "Holmes", host: false, img: img3,url: ""},

}

class SingleEvent extends React.Component{

    state= {
      editing: false,
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location:  {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},

    }

    componentDidMount(prevProps, prevState, snapshot) {
      let  {title, host_name, host_img, event_img,
            event_dscrp, event_tags, participants} = this.props
        this.setState({})
    }



    render() {
        const {title, host_name, host_img, event_img,
            description, tags, participants} = event

        return (<>

            <div className="d-flex flex-column single-event-container">
                <button onClick={()=>this.setState({editing:!this.state.editing})}
                        className="btn">Edit Event</button>
                {this.state.editing ?
                    <input className="form-control"
                           value={this.state.title}
                           onChange={(e)=>this.setState({title: e.target.value})}/> :
                    <h4 className="event-title">{this.state.title}</h4>
                }
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
                         {this.state.editing ?
                          <textarea className="form-control event-description-edit"
                                    value={this.state.description}
                                    onChange={(e)=>this.setState({description: e.target.value})}/> :
                         <p>{this.state.description}</p>
                         }
                     </div>
                     <div className="event-details col-4 ">
                         <div className="details-inner-div">
                         <div className="event-time-location">
                                 {this.state.editing ?
                                   <>
                                       <label htmlFor="date-picker">Date</label>
                                       <DatePicker  name="date-picker"
                                         onChange={(e)=>  this.setState({date: e})}
                                         value={this.state.date}
                                     />
                                           <label htmlFor="time-picker"> Time </label>
                                     <TimePicker  name={"time-picker"}
                                                onChange={(e)=> this.setState({time: e})}
                                                 value={this.state.time}
                                                 disableClock={true}/>


                                       <Location location={this.state.location}  editing={this.state.editing}/>
                                     </>:
                                     <>
                                     <div className="event-data">
                                     <p className="event-date mb-0">{this.state.date.toDateString()}</p>
                                     <p className="event-time"> {this.state.time} </p>
                                     </div>
                                         <div className="event-location">
                                             <p className="event-loc-city mb-0">Lake Baikal</p>
                                             <p className="event-loc-city">Siberia, Russia</p>
                                         </div>
                                     </>
                                     }
                             </div>
                         </div>
                         <div className="event-tags mt-3">
                                 <ul className="nav">
                             {tags.map(tag=>
                                 <li className="nav-item">
                                     {tag}
                                 </li>
                             )}
                             </ul>
                         </div>
                         </div>
                     </div>
                 </div>
                <div className="event-participants ">
                    {participants.map(p => {
                        return <UserCard p={participantsList[p]} />
                    })}
                </div>

            </div>
        <div className="event-attend d-flex ">
            <div className="event-summary">
                <p className="event-date mb-0">Wednesday, October 22, 10am</p>
                <h4 className="event-title">{title}</h4>
            </div>
            <button className="btn btn-success btn-attend">
                Attend
            </button>
        </div></>
        );
    }

}

export default SingleEvent;
