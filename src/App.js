import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
        <SearchResults />

      </div>
    );
  }
}

export default App;
