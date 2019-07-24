import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import imageNotFound from '../../image/image.png';

const MovieCard = ({ imdbID, Poster, Title }) => {
  return (
    <div className="movie-card">
      <Link
        to={`/movie/${imdbID}`}
        style={{ textDecoration: 'none' }}
      >
        <img
          src={Poster}
          alt="movie poster"
          className="movie-img"
          onError={e => {
            e.target.onerror = null;
            e.target.src = imageNotFound;
          }}
        />
        <h4>{Title}</h4>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
};

export default MovieCard;
