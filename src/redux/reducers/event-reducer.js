import {
    CREATE_EVENT,
    DELETE_EVENT,
    GET_ALL_EVENTS, GET_EVENT,
    GET_USER_EVENTS,
    UPDATE_EVENT
} from "../actions/event-actions";
import img4 from "../../assets/Ellipse 4.png";
import img2 from "../../assets/Ellipse 2.png";
import img3 from "../../assets/Ellipse 3.png";
import host_img from "../../assets/Ellipse 1.png";
import event_img from "../../assets/lake.png";

const participantsList = [ { id:123, first_name: "Michelle", last_name: "Steel", host: false, img: img4,url: ""},
    { id: 234,first_name: "Bryan", last_name: "Young", host: true, img: img2,url: ""},
    { id:345, first_name: "Tom", last_name: "Holmes", host: false, img: img3,url: ""},

]
const event = {
    host_id: 234,
    id: 1,
    title: "Lake Baikal cleanup",
    host_name: "Bryan Young",
    host_img: host_img,
    image: event_img,
    date: new Date().toDateString(),
    time_start: "10:00",
    time_end:"12:00",
    location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    tags: ["hashtag1", "hashtag2", "community-service",],
    participants: participantsList,
    editing: false,
}

const event2 = {
    host_id: 123,
    id: 2,
    title: "Trash Hellhole",
    host_name: "Bryan Young",
    host_img: host_img,
    image: event_img,
    date: new Date().toDateString(),
    time_start: "10:00",
    time_end:"12:00",
    location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    tags: ["hashtag1", "hashtag2", "community-service",],
    participants: participantsList,
    editing:false,
}

let init = {
    events: [event, event2]
}


export const event_reducer = (state=init, action) => {

    switch (action.type) {

        case CREATE_EVENT:
            return {...state,
               events: [...state.events, action.event]};
        case UPDATE_EVENT:
            return {...state,
                    events: state.events.map(e => e.id === action.event.id ? action.event : e)
            };
        case DELETE_EVENT:
            return {...state,
                   events: state.events.filter(ev => ev.id !== action.id)};
        case GET_EVENT:
            return {...state,
                   events:state.events.find(ev => ev.id === action.id)}

        case GET_USER_EVENTS:
            return state;
        default: return state;

    }


}
