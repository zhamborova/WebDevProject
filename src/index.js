import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import rdx from './redux/redux-setup'
import {PersistGate} from "redux-persist/integration/react";



ReactDOM.render(
    <Provider store={rdx.store}>
        <PersistGate persistor={rdx.persist_store}>
          <App />
        </PersistGate>
      </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to sign-up() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
