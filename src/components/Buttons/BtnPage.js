import React from 'react';
import PropTypes from 'prop-types';
import './BtnPage.css';

const BtnPage = ({ withStyle, number, changePage, isActive }) => {
  return (
    <button
      type="button"
      onClick={() => changePage(number)}
      className={`btn-page ${isActive ? 'active' : ''}`}
      style={withStyle}
    >
      {number}
    </button>
  );
};

BtnPage.defaultProps = {
  isActive: null,
  withStyle: null,
};

BtnPage.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  changePage: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  withStyle: PropTypes.shape({
    display: PropTypes.string.isRequired,
  }),
};

export default BtnPage;
