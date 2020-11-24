export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const GET_USER_USER = "GET_USER_USER";
export const GET_ALL_USER = "GET_ALL_USER";
export const GET_USER = "GET_USER"
export const SEARCH_USER = "SEARCH_USER"




export const create_user = (user, dispatch) =>{
    dispatch({
        type: CREATE_USER,
        user
    })

}

export const update_user = (user, dispatch) =>{
    dispatch({
        type: UPDATE_USER,
        user
    })

}


export const delete_user = (id, dispatch) =>{
    dispatch({
        type: DELETE_USER,
        id
    })

}







