import React, {useEffect} from 'react';
import Home from './components/screens/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './components/screens/LoginScreen';
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/screens/ProfileScreen';
import './App.css';




function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if (userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // Logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, [])
  return (
  <div className="app">
    <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
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
