import React, { Component } from 'react';
import '../style/app.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: '' 
    };
  }

  render() {
    return (
      <input
        className="form-control mt20 mb20"
        value={this.state.query}
        placeholder='Search repositories...'
        onChange={(event) => this.onInputChange(event.target.value)}
      />
    );
  }

  onInputChange(value) {
    this.setState({ query: value });
    this.props.onSearch(value);
  }
};

export default SearchBar;