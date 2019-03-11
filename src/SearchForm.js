import React, { Component } from 'react';
import { connect } from "react-redux";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({ searchInput: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    let cb = function (resBody) {
      let parsed = JSON.parse(resBody)
      this.props.dispatch({ type: "putSearchResults", res: parsed })
    }
    cb = cb.bind(this)
    let body = JSON.stringify({
      query: this.state.searchInput
    })
    fetch('/search',
      { method: "POST", body })
      .then(function (res) {
        return res.text()
      }).then(cb)

  }
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="search" onChange={this.handleChange} />
          <input type="submit" />

        </form>
      </div>
    )
  }
}

let ConnectedSearchForm = connect()(SearchForm);
export default ConnectedSearchForm;