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
import Tags from "../../components/tags/tags";
import {faCheck, faPenAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const participantsList = [ { id:123, first_name: "Michelle", last_name: "Steel", host: false, img: img4,url: ""},
    { id: 234,first_name: "Bryan", last_name: "Young", host: true, img: img2,url: ""},
    { id:345, first_name: "Tom", last_name: "Holmes", host: false, img: img3,url: ""},

]
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
    participants: participantsList
}



class SingleEvent extends React.Component{

    state= {
      editing: false,
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location:  {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
      tags: event.tags,
      participants: event.participants
    }

    componentDidMount(prevProps, prevState, snapshot) {
      let  {title, host_name, host_img, event_img,
            description, tags, participants} = this.props

     let hostIndex = 0;
        this.state.participants.forEach( (user, i) => {
                if(user.host){
                    hostIndex = i; }})

     if(hostIndex !== 0){
         let list =this.state.participants;
         let temp = list[0];
          list[0] = list[hostIndex];
          list[hostIndex] = temp;
          this.setState({participants:list})

     }

    }

    setLocation = (location ) => {
        this.setState({location})
    }

    removeTag = (tag) => {
        const list = this.state.tags.filter(t => t!==tag);
        this.setState({tags: list});
    }

    addTag = (tag) => {
        const tags = this.state.tags;
        this.setState({tags: [...tags, tag]})
    }

    removeUser = (id) => {

        const list = this.state.participants.filter(p => p.id!==id);
        this.setState({participants: list});

    }

    render() {
        const {title, host_name, host_img, event_img,
            description, tags, participants} = event
        return (<>

            <div className="d-flex flex-column single-event-container">
                <div className="event-editing d-flex">
                {this.state.editing ?
                    <><input className="form-control"
                           value={this.state.title}
                           onChange={(e)=>this.setState({title: e.target.value})}/>
                    <div onClick={()=>this.setState({editing:!this.state.editing})}
                         className="btn">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div> </>:
                    <>
                    <h4 className="event-title">{this.state.title}</h4>
                    <div onClick={()=>this.setState({editing:!this.state.editing})}
                    className="btn">
                        <FontAwesomeIcon icon={faPenAlt}/>
                    </div> </>
                }


                </div>
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
                                       <label htmlFor="date-picker" className="mb-0">Date</label>
                                       <DatePicker  name="date-picker" className="mb-2"
                                         onChange={(e)=>  this.setState({date: e})}
                                         value={this.state.date}
                                     />
                                           <label htmlFor="time-picker"  className="mb-0"> Time </label>
                                     <TimePicker  name={"time-picker"} className="mb-2"
                                                onChange={(e)=> this.setState({time: e})}
                                                 value={this.state.time}
                                                 disableClock={true}/>


                                       <Location location={this.state.location}
                                                  editing={this.state.editing}
                                                  setLocation = {this.setLocation}
                                        />
                                     </>:
                                     <>
                                     <div className="event-data">
                                     <p className="event-date mb-0">{this.state.date.toDateString()}</p>
                                     <p className="event-time"> {this.state.time} </p>
                                     </div>
                                    <Location location={this.state.location}
                                                       editing={false}/>

                                     </>
                                     }
                             </div>
                           <Tags tags={this.state.tags} editing={this.state.editing}
                                 removeTag={this.removeTag}
                                 addTag={this.addTag}/>
                     </div>
                 </div>

            </div>
                </div>
            </div>
                <div className="event-participants ">
                    {this.state.participants.map(p => {
                        return <UserCard p={p} key={p.id}
                                removeUser={this.removeUser}
                                editing={this.state.editing}/>
                    })}
                </div>
        <div className="event-attend d-flex ">
            <div className="event-summary">
                <p className="event-date mb-0">{this.state.date.toDateString()}</p>
                <h4 className="event-title">{this.state.title}</h4>
            </div>
            <button className="btn btn-success btn-attend">
                Attend
            </button>
        </div>
     </>
        );
    }

}

export default SingleEvent;
