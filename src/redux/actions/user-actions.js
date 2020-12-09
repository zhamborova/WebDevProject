import userService from "../../services/user-service";
import {login} from "../../services/user-service";

export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const SET_CURRENT_USER= "SET_CURRENT_USER";
export const SET_USERS= "SET_USERS";
export const LOGOUT = "LOGOUT"


export const create_user = (dispatch, user) =>{
    return userService.createUser(user).then(created_user => {
            dispatch({type: CREATE_USER, user: created_user})

           return created_user.id
    })


}

export const logout = (dispatch) => dispatch({
    type:LOGOUT
})

export const update_user = (user, dispatch) =>{
    userService.updateUser(user)
        .then(updated_user => dispatch({
        type: UPDATE_USER,
        user: updated_user
    }))

}

export const delete_user = (user, dispatch) =>{
    userService.deleteUser(user)
        .then(deleted_user => dispatch({
        type: DELETE_USER,
        user: deleted_user
    }))

}

//request from backend should be done here
export const setCurrentUser = (dispatch, current_user) =>
    dispatch({
        type: SET_CURRENT_USER,
        current_user : current_user
    })


export const set_users = (dispatch, users) =>{

    dispatch({
        type: SET_USERS,
       users
    })

}


