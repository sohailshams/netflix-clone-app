import React from 'react';
import Home from './components/screens/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './components/screens/LoginScreen';
import './App.css';



function App() {
  const user = null;
  return (
  <div className="app">
    <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      )}
       
    </Router>
  </div>
  )
}

export default App;
