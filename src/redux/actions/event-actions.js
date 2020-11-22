export const CREATE_EVENT = "CREATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";


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


