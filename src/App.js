import React from 'react';
import Home from './components/Home';
import Banner from './components/Banner';
import MovieRow from './components/MovieRow';
import requests from './requests';
import './App.css';

function App() {
  return (
  <div className="app">
    <Home />
    <Banner />
    <MovieRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchToRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRow
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
  </div>
  )
}

export default App;
