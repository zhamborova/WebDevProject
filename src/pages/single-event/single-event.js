import React from 'react';
import './single-event.css'
import UserCard from "../../components/user-card/user-card";
import Location from "../../components/location/location";
import Tags from "../../components/tags/tags";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {delete_event} from "../../redux/actions/event-actions";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {get_event_by_id, update_event} from "../../services/events-service";
import {fetchUserById} from "../../services/user-service";
import {DatePicker, TimePicker} from '@material-ui/pickers';

class SingleEvent extends React.Component{

    state= {
      host_name: "",
      host_id: 0,
      id: 0,
      host_img: "",
      editing: false,
      title: "",
      description: "",
      date: new Date(),
      time_start: new Date(),
      time_end:new Date(),
      location: {},
      tags: [],
      participants: [],
      image: ""
    }

     putHostFirst = () => {
         let hostIndex = this.state.participants.findIndex(p =>  p === this.state.host_id)
         if(hostIndex !== 0){
             let list =this.state.participants;
             let temp = list[0];
             list[0] = list[hostIndex];
             list[hostIndex] = temp;
             this.setState({participants:list})

         }
     }
    componentDidMount() {
        let id = this.props.match.params.eventId

        get_event_by_id(id).then(event=> {
            fetchUserById(event.host_id).then(user=>{
                this.setState({host_name:user.first_name + " " + user.last_name,
                                    host_img: user.image})
            })
            this.setState({...event}, () => {
                if (this.state.participants.length > 0) this.putHostFirst();
            })

        } )


    }

    getTime = (date)=>{

        var date = new Date(date);
       return date.getHours() + ":" + date.getMinutes()
    }


    setLocation = (location) => {
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
console.log(this.state)
        return (<>

            <div className="d-flex flex-column single-event-container">
                <div className="event-editing d-flex">
                {this.state.editing ?
                    <><input className="form-control"
                           value={this.state.title}
                           onChange={(e)=>this.setState({title: e.target.value})}/>
                    <div onClick={()=>this.setState({editing:!this.state.editing})}
                         className="btn d-flex">
                        <FontAwesomeIcon icon={faCheck} onClick={()=> {
                            this.setState({editing:false}, ()=>{
                                let {editing, ...state} = this.state
                               update_event(state.id,state);
                           })}}/>
                        <Link to={"/"}><FontAwesomeIcon icon={faTimes}
                                               onClick={()=> {this.props.delete_event(this.state.id)}}/>
                        </Link>
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
                 <img src={this.state.host_img} className="host-img" />
                 <div className="event-hosted-by">
                     <span>Hosted by</span>
                     <span className="host-name">{this.state.host_name}</span>
                 </div>
                    </div>
                 <div className="event-description-container row ">
                     <div className="event-description col-8 p-0">
                         {this.state.editing ?

                          <input className="form-control mb-3" value={this.state.image}
                                 onChange={(e)=> this.setState({image: e.target.value})}/>  :
                          null
                         }
                         <img src={this.state.image} className={"event-img"} />
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
                                       <DatePicker value={this.state.date}
                                                   onChange={(e)=> this.setState({date:e})} />
                                           <label htmlFor="time-picker"  className="mb-0"> Time </label>
                                     <TimePicker  name={"time-picker"} className="mb-2"
                                                onChange={(e)=> this.setState({time_start: e.toString()})}
                                                 value={this.state.time_start}
                                                />
                                       <TimePicker  name={"time-picker"} className="mb-2"
                                                    onChange={(e)=>this.setState({time_end: e})}
                                                    value={this.state.time_end}
                                                   />


                                       <Location location={this.state.location}
                                                  editing={this.state.editing}
                                                  setLocation = {this.setLocation}
                                        />
                                     </>:
                                     <>
                                     <div className="event-date">
                                     <p className="event-date mb-0">{

                                     }</p>
                                     <div className="d-flex">
                                         from
                                     <p className="event-time mr-1 ml-1">
                                           {this.getTime(this.state.time_start)} </p> to
                                         <p className="event-time mr-1 ml-1">
                                             {this.getTime(this.state.time_end)} </p>
                                     </div>
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
                        return <UserCard id={p} key={p}
                                host={this.state.host_id === p}
                                removeUser={this.removeUser}
                                editing={this.state.editing}/>
                    })}
                </div>
        <div className="event-attend d-flex ">
            <div className="event-summary">
                <p className="event-date mb-0">{}</p>
                <h4 className="event-title">{this.state.title}</h4>
            </div>
            <button className="btn btn-success btn-attend">
                Attend
            </button>
        </div>
     </>
)}
}



const mapDispatchToProps = dispatch => ({
        delete_event: (id) => delete_event(id, dispatch),
        update_event: (event) => update_event(event, dispatch),
})
export default connect(()=>({}), mapDispatchToProps)(SingleEvent);
