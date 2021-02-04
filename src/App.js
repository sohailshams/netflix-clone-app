import React from 'react';
import Home from './components/Home';
import Banner from './components/Banner';
import MovieRow from './components/MovieRow';
import './App.css';

function App() {
  return (
  <div className="app">
    <Home />
    <Banner />
    <MovieRow />
  </div>
  )
}

export default App;
