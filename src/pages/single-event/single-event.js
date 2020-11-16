import React from 'react';
import './single-event.css'
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import UserCard from "../../components/user-card/user-card";
import Location from "../../components/location/location";
import Tags from "../../components/tags/tags";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {delete_event, update_event} from "../../redux/actions/event-actions";
import {connect} from "react-redux"
import {Link} from "react-router-dom";


class SingleEvent extends React.Component{

    state= {
      host_name: "",
      host_id: 0,
      id: 0,
      host_img: "",
      editing: false,
      title: "",
      description: "",
      date:"",
      time_start: "",
      time_end:"",
      location: {},
      tags: [],
      participants: [],
      image: ""
    }

     putHostFirst = () => {
         let hostIndex = this.state.participants.findIndex(p =>  p.id === this.state.host_id)
         if(hostIndex !== 0){
             let list =this.state.participants;
             let temp = list[0];
             list[0] = list[hostIndex];
             list[hostIndex] = temp;
             this.setState({participants:list})

         }
     }
    componentDidMount() {
        this.setState({...this.props.event}, ()=>{
            this.putHostFirst();
        })


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props){
            this.setState({...this.props.event})
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
                            this.setState({editing:false}, ()=> this.props.update_event(this.state));

                           }}/>
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
                                       <DatePicker  name="date-picker" className="mb-2"
                                         onChange={(e)=>  this.setState({date: e})}
                                         value={this.state.date}
                                     />
                                           <label htmlFor="time-picker"  className="mb-0"> Time </label>
                                     <TimePicker  name={"time-picker"} className="mb-2"
                                                onChange={(e)=> this.setState({time_start: e})}
                                                 value={this.state.time_start}
                                                 disableClock={true}/>
                                       <TimePicker  name={"time-picker"} className="mb-2"
                                                    onChange={(e)=> this.setState({time_end: e})}
                                                    value={this.state.time_end}
                                                    disableClock={true}/>


                                       <Location location={this.state.location}
                                                  editing={this.state.editing}
                                                  setLocation = {this.setLocation}
                                        />
                                     </>:
                                     <>
                                     <div className="event-date">
                                     <p className="event-date mb-0">{this.state.date}</p>
                                     <div className="d-flex">
                                         from
                                     <p className="event-time mr-1 ml-1"> {this.state.time_start} </p> to
                                         <p className="event-time mr-1 ml-1"> {this.state.time_end} </p>
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
                        return <UserCard p={p} key={p.id}
                                host={this.state.host_id === p.id}
                                removeUser={this.removeUser}
                                editing={this.state.editing}/>
                    })}
                </div>
        <div className="event-attend d-flex ">
            <div className="event-summary">
                <p className="event-date mb-0">{this.state.date}</p>
                <h4 className="event-title">{this.state.title}</h4>
            </div>
            <button className="btn btn-success btn-attend">
                Attend
            </button>
        </div>
     </>

        )}
}

const mapStateToProps = (state, ownProps) =>{
    let id = ownProps.match.params.eventId
    return{  event: state.events.events.find(e => e.id === parseInt(id))}

}


const mapDispatchToProps = dispatch => ({
        delete_event: (id) => delete_event(id, dispatch),
        update_event: (event) => update_event(event, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
