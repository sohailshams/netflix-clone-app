import React from 'react';
import './MovieRow';

function MovieRow({ title }) {
  return (
    <div className="movierow">
      <h2>{title}</h2>
    </div>
  );
}

export default MovieRow;
