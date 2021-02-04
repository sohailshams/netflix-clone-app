import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './MovieRow';

const base_url = 'https://image.tmdb.org/t/p/original/';

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
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie?.name || movie?.title || movie?.original_name}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
