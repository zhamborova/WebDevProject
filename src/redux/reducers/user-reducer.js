import {CREATE_USER, DELETE_USER, LOGOUT, SET_CURRENT_USER, SET_USERS, UPDATE_USER} from "../actions/user-actions";



let init = {
    users: {},
    current_user: null,
}


export const user_reducer = (state=init, action) => {

    switch (action.type) {
        case CREATE_USER:
            console.log(state, action)
            return {...state,
                users: {...state.users, [action.user.id]:action.user},
                current_user: action.user
            };
        case UPDATE_USER:
            return {...state,
                users: {...state.users, [action.user.id]:action.user}
            };
        case DELETE_USER:
            return {...state,
                users: {...delete state.users[action.id]}
            };

        case SET_CURRENT_USER:
            return {
                ...state,
                current_user: action.current_user
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        default: return state;

    }
}

export default user_reducer
