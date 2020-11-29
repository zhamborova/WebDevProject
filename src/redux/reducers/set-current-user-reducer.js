
const initialState = {
    currentUser: {
    }
}


const setCurrentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                currentUser: action.currentUser
            }

        default:
            return state
    }
}

export default setCurrentUserReducer
