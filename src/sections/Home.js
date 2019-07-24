import React from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import './Home.css';

const Home = () => {
  return (
    <section className="section-container">
      <h2 className="subTitle">Let{"'"}s find out...</h2>
      <SearchForm />
    </section>
  );
};

export default Home;
