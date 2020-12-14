import React from 'react';
import './App.css';

import {Switch, Route, BrowserRouter,} from 'react-router-dom';
import Home from "./pages/home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchNews from "./pages/search-news/search-news.js";
import SingleEvent from "./pages/single-event/single-event";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CreateEvent from "./pages/create-event/create-event";
import SearchEvents from "./pages/search-events/search-events";
import Settings from "./pages/settings/settings";
import UserProfile from "./pages/user-profile/user-profile";
import SearchUsers from "./pages/search-users/seach-users";
import NavBar from "./components/navbar/navbar";
import {connect} from "react-redux";
import SignInSide from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";

const ProtectedRoute = ({ component: Component, loggedin:loggedin, login, register, ...rest }) => (
    <Route {...rest} render={(props) => (
        loggedin ?
            <Component {...props} /> :
           !(login || register) ?  <>{window.alert("Login/sign-up to see all our events")}
                <Home/></> : <Home/>

    )} />
);


function App(props) {
  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
     <BrowserRouter >
           <NavBar/>
              <Switch >

                  <Route exact path='/' component={Home}/>
                  <ProtectedRoute component={SingleEvent}
                                  exact path={'/events/:eventId'}
                                  loggedin= {props.current_user} />
                  <ProtectedRoute loggedin= {props.current_user}
                      exact path={['/search-events',
                      '/search-events/:search',
                      '/events']} component={SearchEvents}/>
                  <ProtectedRoute exact path={['/search-users', '/search-users/:search' ]}
                                  component={SearchUsers} loggedin= {props.current_user} />
                  <Route exact path={['/search-news', '/search-news/:search']} component={SearchNews}/>
                  <ProtectedRoute exact path={'/users/:userId/events'} component={CreateEvent}
                                  loggedin= {props.current_user}/>
                  <ProtectedRoute exact path={'/users/:userId/settings'} component={Settings}
                                  loggedin= {props.current_user}/>
                  <ProtectedRoute exact path={'/users/:userId'} component={UserProfile}
                                  loggedin= {props.current_user}/>
                  <ProtectedRoute exact path={'/sign-in'} component={SignInSide} login
                                  loggedin= {!props.current_user}/>
                  <ProtectedRoute exact path={'/sign-up'} component={SignUp} register
                                  loggedin= {!props.current_user}/>
              </Switch>



    </BrowserRouter>
      </MuiPickersUtilsProvider>
  );
}

const mapStateToProps = (state) => ({
    current_user: state.users.current_user
})

export default connect(mapStateToProps)(App)

