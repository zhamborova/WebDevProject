import {CREATE_USER, SET_CURRENT_USER,  UPDATE_USER} from "../actions/user-actions";



let init = {
    current_user: null,
}


export const user_reducer = (state=init, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {...state,
                users: {...state.users, [action.user.id]:action.user},
                current_user: action.user
            };
        case UPDATE_USER:
            return {...state,
                current_user: action.user
            };

        case SET_CURRENT_USER:
            return {
                ...state,
                current_user: action.current_user
            }


        default: return state;

    }
}

export default user_reducer
