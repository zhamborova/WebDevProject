import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./pages/news/news";
function App() {
  return (
    <BrowserRouter   >
      <Switch>
      <Route exact to='\news' component={News}/>
      <Route exact to='\' component={Home}/>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
