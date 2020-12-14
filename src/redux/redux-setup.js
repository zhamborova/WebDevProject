import {combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";

import {event_reducer} from './reducers/event-reducer';
import {user_reducer} from './reducers/user-reducer';

import storage from "redux-persist/lib/storage"

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
