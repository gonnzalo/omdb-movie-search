import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from './sections/Home';
import SearchResult from './sections/SearchResult';
import ItemDetail from './sections/ItemDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/search/:title" component={SearchResult} />
        <Route path="/movie/:movie_id" component={ItemDetail} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
