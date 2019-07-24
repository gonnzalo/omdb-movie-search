import React from 'react';
import './MovieDetail.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useMedia } from 'use-media';

const MovieDetail = ({
  Title,
  Year,
  Country,
  Director,
  Genre,
  Poster,
  Plot,
  Rated,
  Runtime,
  Language,
  history,
}) => {
  const isWide = useMedia({ minWidth: 740 });
  return (
    <div className="movie-detail-container">
      {isWide && (
        <div>
          <img src={Poster} alt="" className="poster" />
        </div>
      )}
      <article className="info-container">
        <h1>{Title}</h1>
        <p>{Plot}</p>
        <p>
          <b>Director:</b> {Director}
        </p>
        <p>
          <b>Genre:</b> {Genre}
        </p>
        <p>
          <b>Rated:</b> {Rated}
        </p>
        <p>
          <b>Runtime:</b> {Runtime}
        </p>
        <p>
          <b>Country:</b> {Country}
        </p>
        <p>
          <b>Language:</b> {Language}
        </p>
        <p>
          <b>Release date:</b> {Year}
        </p>
        <span className="btn-wrapper">
          <button
            type="button"
            onClick={history.goBack}
            className="btn-back"
          >
            Back
          </button>
        </span>
      </article>
    </div>
  );
};

MovieDetail.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Country: PropTypes.string.isRequired,
  Director: PropTypes.string.isRequired,
  Genre: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
  Rated: PropTypes.string.isRequired,
  Runtime: PropTypes.string.isRequired,
  Language: PropTypes.string.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default withRouter(MovieDetail);
