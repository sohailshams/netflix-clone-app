import React from 'react';
import Home from './components/screens/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';


function App() {
  return (
  <div className="app">
    <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  </div>
  )
}

export default App;
