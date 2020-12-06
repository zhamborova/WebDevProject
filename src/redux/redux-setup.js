import {combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import {event_reducer} from "./redux/reducers/event-reducer";
import {user_reducer} from "./redux/reducers/user-reducer";

import storage from "redux-persist/lib/storage"

const persist_config = {
    key: "root",
    storage,
    whitelist:["events", "users"],
}
const rootReducer = combineReducers({
    events: event_reducer,
    users: user_reducer,
})

const persist_reducer = persistReducer(persist_config, rootReducer)

const store = createStore(persist_reducer)
const persist_store = persistStore(store)

export default {store, persist_store}
