import React from 'react';
import './events-search.css';
import SearchBar from "../../components/search-bar/search-bar";
import host_img from "../../assets/Ellipse 1.png";
import event_img from "../../assets/lake.png";
import EventListCard from "../../components/event-list-card/event-list-card";

const event = {

    title: "Lake Baikal cleanup",
    host_name: "Bryan Young",
    host_img: host_img,
    event_img: event_img,
    event_date:{startTime: "10:00am", endTime: "5:00pm", date: "Wed, Oct  22"},
    event_location: {street: "", city:"", state: "", country: "", zip: ""},
    event_dscrp: "Lorem ipsum dolor sit amet, ...",
    event_tags: ["hashtag1", "hashtag2", "community-service",],
    participants: [1,2,3,]
}


const events = [event, event, event]

class EventsSearch extends React.Component {

    state = {
        events: events
    }

    render() {
        return (
            <div>
                <div>
                <h1 className={'heading-padding'}>Events</h1>
                </div>
                <SearchBar/>
                <div className={'events-list'}>
                    {
                        this.state.events.map(event => <EventListCard event={event}/>)
                    }
                </div>
            </div>
        )
    }
}

export default EventsSearch;