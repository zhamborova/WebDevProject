import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchNews from "./pages/search-news/search-news.js";
import SingleEvent from "./pages/single-event/single-event";
import CreateEvent from "./pages/create-event/create-event";
import SearchEvents from "./pages/search-events/search-events";
import Settings from "./pages/settings/settings";
import UserProfile from "./pages/user-profile/user-profile";


function App() {
  return (
    <BrowserRouter   >
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path={['/events', '/events/search/:search' ]} component={SearchEvents}/>
          <Route exact path={['/search-news', '/search-news/:title']} component={SearchNews}/>
          <Route exact path={'/events/:eventId'} component={SingleEvent} />
          <Route exact path={'/users/:userId/events'} component={CreateEvent} />
          <Route exact path={'/users/:userId/settings'} component={Settings} />
          <Route exact path={'/users/:userId/'} component={UserProfile} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
