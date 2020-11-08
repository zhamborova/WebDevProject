import React from 'react';
import './create-event.css';

class CreateEvent extends React.Component{
    render() {
        return(
            <div className={"body"}>
                <div className={"container create-event-container"}
                     style={{backgroundColor: '#FFFFFF'}}>
                    <h2>Create Event</h2>
                    <div>
                        <label>Event title</label>
                        <input className={"form-control"}/>
                    </div>
                    <div>
                        <label>Event description</label>
                        <input className={"form-control"}/>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type={"date"} className={"form-control"}/>
                    </div>
                    <div>
                        <label>Location</label>
                        <input className={"form-control"}/>
                    </div>
                    <div>
                        <label>Difficulty level</label>
                        <select className={"form-control"}>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    <div>
                        <label>Tags</label>
                        <input className={"form-control"}/>
                    </div>
                    <div className={"form-row"}>
                        <button type={"button"} className={"btn btn-outline-secondary"}>Cancel</button>
                        <button type={"button"} className={"btn btn-success"}>Create event</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEvent;