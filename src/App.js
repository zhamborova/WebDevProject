import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
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


function App(props) {
  return (
      <>

          <BrowserRouter>
           <NavBar/>
         {props.current_user &&
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path={'/events/:eventId'} component={SingleEvent} />
            <Route exact path={['/search-events,',
                               '/search-events/:search',
                               '/events']} component={SearchEvents}/>
            <Route exact path={['/search-users', '/search-users/:search' ]} component={SearchUsers} />
            <Route exact path={['/search-news', '/search-news/:search']} component={SearchNews}/>
            <Route exact path={'/users/:userId/events'} component={CreateEvent} />
            <Route exact path={'/users/:userId/settings'} component={Settings} />
            <Route exact path={'/users/:userId/'} component={UserProfile} />

        </Switch>
        }

        {!props.current_user &&
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path={['/search-news', '/search-news/:title']} component={SearchNews}/>
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/register'} component={Register}/>
        </Switch>
        }



    </BrowserRouter>
</>
  );
}

const mapStateToProps = (state) => ({
    current_user: state.users.current_user,})

export default connect(mapStateToProps)(App)

