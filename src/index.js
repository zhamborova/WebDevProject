import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {event_reducer} from "./redux/reducers/event-reducer";
import {Provider} from "react-redux";
import {user_reducer} from "./redux/reducers/user-reducer";

const rootReducer = combineReducers({
    events: event_reducer,
    users: user_reducer,
})

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
          <App />
      </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
