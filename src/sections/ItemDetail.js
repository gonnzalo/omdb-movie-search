import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import './ItemDetail.css';

const ItemDetail = ({ match }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const id = match.params.movie_id;
    const url = `https://www.omdbapi.com/?apikey=67bd717f`;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url, {
          params: {
            i: id,
          },
        });
        if (result.data.Response === 'False') setIsError(true);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [match]);
  return (
    <section className="section-container">
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? <div>Loading ...</div> : <MovieDetail {...data} />}
    </section>
  );
};

ItemDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movie_id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default ItemDetail;
