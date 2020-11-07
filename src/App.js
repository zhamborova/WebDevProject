import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./pages/news/news.js";
import SingleEvent from "./pages/single-event/single-event";
function App() {
  return (
    <BrowserRouter   >
      <Switch>
          <Route exact path='/' component={Home}/>

          <Route exact path={['/news', "/news/:title"]} component={News}/>
          <Route exact path={'/events/:eventId'} component={SingleEvent} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
