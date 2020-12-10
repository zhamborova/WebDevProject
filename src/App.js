import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import Home from "./pages/home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchNews from "./pages/search-news/search-news.js";
import SingleEvent from "./pages/single-event/single-event";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

import CreateEvent from "./pages/create-event/create-event";
import SearchEvents from "./pages/search-events/search-events";
import Settings from "./pages/settings/settings";
import UserProfile from "./pages/user-profile/user-profile";
import SearchUsers from "./pages/search-users/seach-users";
import NavBar from "./components/navbar/navbar";
import {connect} from "react-redux";

const ProtectedRoute = ({ component: Component, loggedin:loggedin, ...rest }) => (
    <Route {...rest} render={(props) => (
        loggedin ?
            <Component {...props} /> :
            <>{window.alert("Login/register to see all our events")}
                <Home/></>

    )} />
);


function App(props) {
  return (
     <BrowserRouter>
           <NavBar/>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <ProtectedRoute component={SingleEvent}
                                  exact path={'/events/:eventId'}
                                  loggedin= {props.current_user} />
                  <ProtectedRoute loggedin= {props.current_user}
                      exact path={['/search-events,',
                      '/search-events/:search',
                      '/events']} component={SearchEvents}/>
                  <ProtectedRoute exact path={['/search-users', '/search-users/:search' ]}
                                  component={SearchUsers} loggedin= {props.current_user} />
                  <Route exact path={['/search-news', '/search-news/:search']} component={SearchNews}/>
                  <ProtectedRoute exact path={'/users/:userId/events'} component={CreateEvent}
                                  loggedin= {props.current_user}/>
                  <ProtectedRoute exact path={'/users/:userId/settings'} component={Settings}
                                  loggedin= {props.current_user}/>
                  <ProtectedRoute exact path={'/users/:userId/'} component={UserProfile}
                                  loggedin= {props.current_user}/>
                  <ProtectedRoute exact path={'/login'} component={Login}
                                  loggedin= {!props.current_user}/>
                  <ProtectedRoute exact path={'/register'} component={Register}
                                  loggedin= {!props.current_user}/>
              </Switch>
         }


    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
    current_user: state.users.current_user
})

export default connect(mapStateToProps)(App)

