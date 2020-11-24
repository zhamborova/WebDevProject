import {
    CREATE_EVENT,
    DELETE_EVENT, SET_EVENTS,
    UPDATE_EVENT
} from "../actions/event-actions";


let init = {
    events: []
}


export const event_reducer = (state=init, action) => {

    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: action.events
            }
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

        default: return state;

    }


}
