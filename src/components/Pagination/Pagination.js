import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';
import BtnPage from '../Buttons/BtnPage';

const Pagination = ({ pageNumbers, changePage, currentPage }) => {
  let pageNumberReduce = [];

  if (currentPage === 1) {
    pageNumberReduce = pageNumbers.slice(
      currentPage - 1,
      currentPage + 2,
    );
  } else {
    pageNumberReduce = pageNumbers.slice(
      currentPage - 2,
      currentPage + 1,
    );
  }

  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <BtnPage number="<" changePage={changePage} />
      )}

      {currentPage > 2 && (
        <>
          <BtnPage number={1} changePage={changePage} />
          <BtnPage
            number={2}
            changePage={changePage}
            withStyle={{
              display: currentPage === 4 ? 'inline-block' : 'none',
            }}
          />
          <span
            style={{
              display: currentPage > 4 ? 'inline-block' : 'none',
            }}
          >
            ...
          </span>
        </>
      )}

      {pageNumbers.length > 1 &&
        pageNumberReduce.map(number => (
          <BtnPage
            key={number}
            number={number}
            changePage={changePage}
            isActive={number === currentPage}
          />
        ))}
      {currentPage + 1 < pageNumbers.length && (
        <>
          <span
            style={{
              display:
                currentPage + 4 > pageNumbers.length
                  ? 'none'
                  : 'inline-block',
            }}
          >
            ...
          </span>
          <BtnPage
            number={pageNumbers.length - 1}
            changePage={changePage}
            withStyle={{
              display:
                currentPage + 3 === pageNumbers.length
                  ? 'inline-block'
                  : 'none',
            }}
          />
          <BtnPage
            number={pageNumbers.length}
            changePage={changePage}
          />
        </>
      )}
      {currentPage < pageNumbers.length && (
        <BtnPage number=">" changePage={changePage} />
      )}
    </div>
  );
};

Pagination.propTypes = {
  pageNumbers: PropTypes.arrayOf(PropTypes.number.isRequired)
    .isRequired,
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
