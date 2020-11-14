import React from 'react';
import './create-event.css';
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import Location from "../../components/location/location";
import Tags from "../../components/tags/tags";
import {Link} from "react-router-dom";
import {create_event} from "../../redux/actions/event-actions";
import {connect} from "react-redux";

class CreateEvent extends React.Component{
    state={
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
    render() {
        return(
            <div className="create-event-bg">
            <div className="d-flex flex-column create-event-container">
                <h2 className="m-auto">Create Event</h2>
                        <label htmlFor="title">Add Title </label>
                         <input className="form-control mb-3" name="title"
                                     value={this.state.title}
                                     onChange={(e)=>this.setState({title: e.target.value})}/>

                        <label htmlFor="image">Add Cover Image </label>
                        <input className="form-control mb-3"
                               name="image"
                               value={this.state.image}
                               onChange={(e)=> this.setState({image: e.target.value})}/>
                        <label htmlFor="image-preview">Preview Image</label>
                          <img src={this.state.image} className={"event-img"}   name="image-preview" />

                         <label htmlFor="description" >Description</label>
                                    <textarea className="form-control event-description-edit"
                                               name="description"
                                              value={this.state.description}
                                              onChange={(e)=>this.setState({description: e.target.value})}/>


                                                <label htmlFor="date-picker" >Date</label>
                                                <DatePicker  name="date-picker"
                                                             onChange={(e)=>  this.setState({date: e})}
                                                             value={this.state.date}
                                                />
                                                <label htmlFor="time-picker-start"  > Start Time</label>
                                                <TimePicker  name="time-picker-start"
                                                             onChange={(e)=> this.setState({time_start: e})}
                                                             value={this.state.time_start}
                                                             disableClock={true}/>
                    <label htmlFor="time-picker-end" > End Time</label>

                    <TimePicker  name="time-picker-end"  onChange={(e)=> this.setState({time_end: e})}
                                                             value={this.state.time_end}
                                                             disableClock={true}/>


                                                <Location location={this.state.location}
                                                          editing={true}
                                                          setLocation = {this.setLocation}/>


                    <Tags tags={this.state.tags} editing={true}
                          addTag={this.addTag} removeTag={this.removeTag}/>

                      <div className="create-btns d-flex justify-content-between">
                       <button className="form-control ">   <Link to="/">Cancel</Link></button>
                          <button className="form-control "
                                  onClick={()=> this.props.create_event(this.state)}
                               >Create event</button>
                      </div>

                </div>


            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    create_event: (event) => create_event(event, dispatch),
})
export default connect(null, mapDispatchToProps)(CreateEvent);
