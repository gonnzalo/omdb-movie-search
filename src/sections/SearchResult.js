import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './SearchResult.css';
import Pagination from '../components/Pagination/Pagination';
import MovieCard from '../components/MovieCard/MovieCard';

const SearchPage = ({ location, match }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [resultTitle, setResultTitle] = useState('');
  const [resultYear, setResultYear] = useState('all years');
  const [resultType, setResultType] = useState('all types');
  useEffect(() => {
    // get query params from serchForm
    const params = new URLSearchParams(location.search);
    const { title } = match.params;
    const year = params.get('year');
    const type = params.get('type');
    const url = `https://www.omdbapi.com/?apikey=67bd717f`;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url, {
          params: {
            s: title,
            y: year,
            type,
            page: currentPage,
          },
        });
        // handle error...
        if (result.data.Response === 'False') setIsError(true);
        // save data
        setData(result.data.Search);
        setTotalResults(result.data.totalResults);
        setResultTitle(title);
        if (type) setResultType(type);
        if (year) setResultYear(year);
        // get total page need for pagination
        const totalPage = [];
        for (
          let i = 1;
          i <= Math.ceil(result.data.totalResults / 10);
          i += 1
        ) {
          totalPage.push(i);
        }
        setPageNumbers(totalPage);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [currentPage, location.search, match.params]);

  const changePage = number => {
    if (number === '>') {
      setCurrentPage(currentPage + 1);
    } else if (number === '<') {
      setCurrentPage(currentPage - 1);
    } else setCurrentPage(number);
  };

  return (
    <>
      {totalResults > 0 && (
        <div className="title-wrapper">
          <span className="result-title">
            {totalResults} of {resultType} &quot;{resultTitle}&quot;
            found in {resultYear}
          </span>
        </div>
      )}
      <section className="section-container">
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <div className="movies-container">
            {data &&
              data.map(movie => (
                <MovieCard key={movie.imdbID} {...movie} />
              ))}
          </div>
        )}
      </section>
      <Pagination
        pageNumbers={pageNumbers}
        changePage={changePage}
        currentPage={currentPage}
      />
    </>
  );
};

SearchPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default SearchPage;
