import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchForm = ({ history }) => {
  const [title, setTile] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    history.push(
      `/search/${title}${year ? `&year=${year}` : ''}${
        type ? `&type=${type}` : ''
      }`,
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        {' '}
        Title
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTile(e.target.value)}
          required
        />
      </label>
      <label htmlFor="year">
        {' '}
        Year
        <input
          type="text"
          id="year"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
      </label>
      <select
        value={type}
        onChange={e => setType(e.target.value)}
        placeholder="Type"
      >
        <option value="" disabled>
          Type
        </option>
        <option value="movie">Movie</option>
        <option value="series">Serie</option>
        <option value="episode">Episode</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

SearchForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SearchForm);
