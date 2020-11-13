export const CREATE_EVENT = "CREATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const GET_USER_EVENTS = "GET_USER_EVENTS";
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_EVENT = "GET_EVENT"

export const create_event = (event, dispatch) =>{
    dispatch({
        type: CREATE_EVENT,
        event
    })

}

export const update_event = (event, dispatch) =>{
    dispatch({
        type: UPDATE_EVENT,
        event
    })

}


export const delete_event = (id, dispatch) =>{
    dispatch({
        type: DELETE_EVENT,
        id
    })

}

export const get_user_events = (id, dispatch) => {

    dispatch({
        type: GET_USER_EVENTS,
        id
    })
}

export const get_all_events = ( dispatch) => {
    dispatch({
        type: GET_ALL_EVENTS
    })
}
export const get_event = (id, dispatch) => {
    dispatch({
        type: GET_EVENT,
        id
    })
}



