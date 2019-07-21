import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchPage = ({ location, match }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    // get query params from serchForm
    const params = new URLSearchParams(location.search);
    const { title } = match.params;
    const year = params.get('year');
    const type = params.get('type');
    const url = `http://www.omdbapi.com/?apikey=67bd717f`;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url, {
          params: {
            s: title,
            y: year,
            type,
          },
        });
        // handle error...
        if (result.data.Response === 'False') setIsError(true);
        setData(result.data.Search);
        console.log(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [data, location, match]);

  return (
    <>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {data &&
            data.map(movie => (
              <div key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  <img src={movie.Poster} alt="movie poster" />
                  <h3>{movie.Title}</h3>
                </Link>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

SearchPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default SearchPage;
