import React from 'react';
import './create-event.css';
import {DatePicker, TimePicker} from '@material-ui/pickers';

import Location from "../../components/location/location";
import Tags from "../../components/tags/tags";
import {Link} from "react-router-dom";
import {create_event} from '../../services/events-service';
import TextField from '@material-ui/core/TextField';
import {

    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {fetchUserById} from "../../services/user-service";

class CreateEvent extends React.Component{
    state={
        host_id: 0,
        host_name:"",
        host_img: "",
        id: 0,
        editing: false,
        title: "",
        description: "",
        date: new Date(),
        time_start: new Date(),
        time_end: new Date(),
        location: {},
        tags: [],
        participants: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg",
    }

     styles = theme => ({
        textField: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500
        },
        input: {
            color: 'white'
        }
    });

    componentDidMount() {
        let host_id = this.props.match.params["userId"]
        fetchUserById(host_id).then(user=>this.setState({
            host_name: user.first_name + " " + user.last_name,
            host_img: user.image
        }))
        this.setState({host_id:host_id, participants:[host_id]})
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

    fieldsAreNotEmpty = () => {
        if (this.state.description !== '' &&
            this.state.title !== '' &&
            this.state.tags.length > 0 &&
            this.state.location.street !== '' &&
            this.state.location.city !== '' &&
            this.state.location.country !== '' &&
            this.state.location.zip !== '') {
            return true
        }
    }




    anyFieldIsEmpty = () => {
        if ((this.state.description === '' ||
            this.state.title === '' ||
            this.state.tags.length === 0 ||
            this.state.location.street === '' ||
            this.state.location.city === '' ||
            this.state.location.country === '' ||
            this.state.location.zip === '' ||
            Object.keys(this.state.location).length < 4)) {
            return true
        }
    }




    render() {
        return(
            <div className="create-event-bg">
                <div className="d-flex flex-column create-event-container">
                    <h2 className="ml-auto mr-auto mt-2 mb-4">Create Event</h2>
                    <TextField  name="title" label="Title..." variant="outlined"
                           value={this.state.title}
                           onChange={(e)=>this.setState({title: e.target.value})}
                                margin="normal"/>
                    <TextField id="outlined-basic" label="Add image url..."
                               variant="outlined"
                               name="image"
                               value={this.state.image}
                               onChange={(e)=> this.setState({image: e.target.value})}
                               margin="normal"

                    />

                    <img src={this.state.image}  className="image-preview" />

                    <TextField multiline variant="outlined" rows={4}  label="Description"
                              className="form-control event-description-edit"
                              name="description"
                              value={this.state.description}
                              onChange={(e)=>this.setState({description: e.target.value})}
                               margin="normal"/>

                    <Box display="flex" p={1}
                         bgcolor="background.paper"
                         justifyContent="space-between"
                         mt={1} mb={1}>
                    <KeyboardDatePicker name="date-picker"  className="mb-3"
                                value={this.state.date}
                                onChange={(e)=> this.setState({date:e.toString()})} />
                    <KeyboardTimePicker  name="time-picker-start"
                                 onChange={(e)=> this.setState({time_start: e.toString()})}
                                 value={this.state.time_start}/>
                    <KeyboardTimePicker  name="time-picker-end"
                                 onChange={(e)=>this.setState({time_end: e.toString()})}
                                 value={this.state.time_end}/>
                    </Box>

                    <Location location={this.state.location}
                              editing={true}
                              setLocation = {this.setLocation}/>


                    <Tags tags={this.state.tags} editing={true}
                          addTag={this.addTag} removeTag={this.removeTag}/>


                    <div className="create-btns d-flex justify-content-between">
                        <Button style={{minWidth: '45%', minHeight: '45%', textTransform:'none'}}
                            size="large" variant="outlined">
                            <Link to="/" className="w-100">Cancel</Link>
                        </Button>


                        {this.fieldsAreNotEmpty === true &&
                        <Button style={{minWidth: '45%', minHeight: '45%', textTransform:'none', background:"#3a7347"}}
                                size="large" variant="outlined"
                                onClick={()=> {
                                    if (this.state.image === "") {
                                        this.setState({image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg'})
                                    }
                                    let {editing, ...state} = this.state
                                    create_event(state).then(ev=>{
                                        this.props.history.push(`/events/${ev.id}`)
                                    })}}>

                            <Link to="/" className="w-100">
                                Create event
                            </Link>
                        </Button>
                        }

                        {
                            this.fieldsAreNotEmpty === false &&
                        <Button style={{minWidth: '45%', minHeight: '45%', textTransform:'none',
                            background:"#3a7347"}}
                                size="large" variant="outlined">

                            Please fill out all of the fields
                        </Button>
                        }


                    </div>


                </div>


            </div>
        )
    }
}


export default CreateEvent;
