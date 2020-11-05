import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./pages/news/news.js";
function App() {
  return (
    <BrowserRouter   >
      <Switch>
          <Route exact path='/' component={Home}/>

          <Route exact path={['/news', "/news/:title"]} component={News}/>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
