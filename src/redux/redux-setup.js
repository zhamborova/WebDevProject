import {combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
<<<<<<< HEAD
import storage from "redux-persist/lib/storage"
import {event_reducer} from "./reducers/event-reducer";
import {user_reducer} from "./reducers/user-reducer";
=======
import {event_reducer} from './reducers/event-reducer';
import {user_reducer} from './reducers/user-reducer';

import storage from "redux-persist/lib/storage"
>>>>>>> 0ccb03c6b2158ce239a037c0f3da7ea6bd8a2ecb

const persist_config = {
    key: "root",
    storage,
    whitelist:["events", "users"],
}
const appReducer = combineReducers({
    events: event_reducer,
    users: user_reducer,

})



const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = {
            users:{
                users: null,
                current_user: null
            },
        }
    }
    return appReducer(state, action)
}

const persist_reducer = persistReducer(persist_config, rootReducer)

const store = createStore(persist_reducer)
const persist_store = persistStore(store)

export default {store, persist_store}
