import event_service from '../../services/events-service'
export const CREATE_EVENT = "CREATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const SET_EVENTS = "SET_EVENTS";


export const set_events = (dispatch, events) =>{
        dispatch({
            type: SET_EVENTS,
            events

        })

}

export const create_event = (event, dispatch) =>{
    event_service.create_event(event).then(e =>
    dispatch({
        type: CREATE_EVENT,
        event
    }))

}

export const update_event = (event, dispatch) =>{
    event_service.update_event(event.id, event).then(newEvent=>
        dispatch({
        type: UPDATE_EVENT,
        event:newEvent
    }))

}


export const delete_event = (id, dispatch) =>{
    event_service.delete_event(id).then(s =>
        dispatch({
        type: DELETE_EVENT,
        id
    }))
}


