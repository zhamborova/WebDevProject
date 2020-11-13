import React from 'react';
import './create-event.css';
import Tags from "../../components/tags/tags";
import InputBox from "../../components/input-box/input-box";

const tags = ["hashtag1", "hashtag2", "community-service",]

class CreateEvent extends React.Component{

    state= {
        tags: tags,
    }

    render() {
        return(
            <div className={"body"}>

                <div className={"container create-event-container background-color"}>
                    <div className={'heading-pad'}>
                    <h2>Create Event</h2>
                    </div>
                    <div className={'input-fields-container'}>
                    <InputBox field={"Event title"} hasType={false}/>
                    <InputBox field={"Event description"} hasType={false}/>
                    <InputBox field={"Date"} hasType={true} type={"date"}/>
                    <InputBox field={"Location"} hasType={false}/>
                    <div className={'form-group row'}>
                        <label>Difficulty level</label>
                        <select className={"form-control"}>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    <div className={'form-group row'}>
                        <label>Tags</label>
                        <input className={"form-control"}/>
                        <Tags tags={this.state.tags} editing={false}
                              removeTag={this.removeTag}
                              addTag={this.addTag}/>
                    </div>
                    <div className={"form-group row"}>
                        <div className={'button-padding col'}>
                        <button type={"button"} className={"btn btn-outline-secondary col"}>Cancel</button>
                        </div>
                        <div className={'button-padding ml-auto col'}>
                        <button type={"button"} className={"btn btn-success ml-auto col"}>Create event</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEvent;