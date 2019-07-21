import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ItemDetail = ({ match }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const id = match.params.movie_id;
    const url = `http://www.omdbapi.com/?apikey=67bd717f`;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url, {
          params: {
            i: id,
          },
        });
        console.log(result.data);
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
    <>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? <div>Loading ...</div> : <div>{data.Title}</div>}
    </>
  );
};

ItemDetail.propTypes = {};

export default ItemDetail;
