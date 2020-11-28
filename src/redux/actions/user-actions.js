import userService from "../../services/UserService";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const GET_USER_USER = "GET_USER_USER";
export const GET_ALL_USER = "GET_ALL_USER";
export const GET_USER = "GET_USER";
export const SEARCH_USER = "SEARCH_USER";

export const create_user = (user, dispatch) =>{
    userService.createUser(user)
        .then(created_user => dispatch({
        type: CREATE_USER,
        user: created_user
    }))

}

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

export const get_user = (userId, dispatch) => {
    console.log('asking userService')
    userService.fetchUserById(userId)
        .then(actual_user => dispatch({
            type: GET_USER,
            user: actual_user
        }))
}

export const get_all_users = (dispatch) => {
    userService.fetchAllUsers()
        .then(all_users => dispatch({
            type: GET_ALL_USER,
            users: all_users
        }))
}




