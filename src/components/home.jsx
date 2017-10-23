import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

import Header from './header';
import RepositoryList from './repository_list';
import SearchBar from './search_bar';
import '../style/app.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    };
  }

  componentWillMount() {
    const url = `https://api.github.com/repositories?since=${Math.floor(1 + Math.random() * (1000000 - 1))}`
    axios.get(url).then(response => {
      this.setState({ repositories: response.data });
    }).catch(error => {
      //console.log(error);
    });
  }

  repositorySearch(q) {
    const url = `https://api.github.com/search/repositories?q=${q}`;
    axios.get(url).then(response => {
      this.setState({ repositories: response.data.items });
    }).catch(error => {
      //console.log(error);
    });
  }

  render() {
    const repositorySearch = _.debounce((q) => { this.repositorySearch(q) }, 300);

    return (
      <div className="app container-fluid">
        <Header />      
        <div class="container">
          <div className="row">
            <div className="col-md-12">
              <SearchBar onSearch={repositorySearch} />
            </div>
          </div>
          <RepositoryList repositories={this.state.repositories} />
        </div>
      </div>
    );
  }
}

export default Home;
