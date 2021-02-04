import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './MovieRow';

function MovieRow({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="movierow">
      <h2>{title}</h2>
    </div>
  );
}

export default MovieRow;
