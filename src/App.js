import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter   >
      <Switch>
      <Route to='\' component={Home}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
