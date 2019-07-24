import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMedia } from 'use-media';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({ history }) => {
  const [title, setTile] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const isWide = useMedia({ minWidth: 880 });

  const handleSubmit = e => {
    e.preventDefault();
    history.push(
      `/search/${title}${year ? `?year=${year}` : '?'}${
        type ? `&type=${type}` : ''
      }`,
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          {' '}
          {isWide && 'Title'}
          <input
            type="text"
            id="title"
            aria-label="title"
            value={title}
            onChange={e => setTile(e.target.value)}
            placeholder="Search Movie..."
            required
          />
        </label>
        <label htmlFor="year">
          {' '}
          {isWide && 'Year'}
          <input
            type="text"
            id="year"
            aria-label="year"
            value={year}
            onChange={e => setYear(e.target.value)}
            placeholder="Movie year..."
          />
        </label>
        <select
          aria-label="type"
          value={type}
          onChange={e => setType(e.target.value)}
          className="dropdown"
        >
          <option value="" disabled>
            Type
          </option>
          <option value="movie">Movie</option>
          <option value="series">Serie</option>
          <option value="episode">Episode</option>
        </select>
        <input type="submit" value="Search" className="btn-search" />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(SearchForm);
