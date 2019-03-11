import React, { Component } from 'react';
import { connect } from 'react-redux';
class SearchResults extends Component {
  render() {
    let displayResult = function (item) {
      return (<div>{item.description}</div>)
    }
    return (<div>
      {this.props.results.map(displayResult)}
    </div >)
  }
}

let connectedSearchResults = connect(function (store) {
  return {
    results: store.searchResults
  }
})(SearchResults)
export default connectedSearchResults;