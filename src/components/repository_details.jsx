import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

import Header from './header';
import '../style/app.css';

class RepositoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repository: {
        full_name: null,
        description: null,
        owner: {
          avatar_url: null
        }
      }
    };
  }

  componentWillMount() {
    const url = `https://api.github.com/repos/${this.props.match.params.owner}/${this.props.match.params.repo}`
    axios.get(url).then(response => {
      this.setState({ repository: response.data });
    }).catch(error => {
      //console.log(error);
    });
  }

  render() {
    return (
      <div className="app container-fluid">
        <Header />
        <div class="container">
          <div className="row">
            <div className="col-md-3 mt20">
              <img src={this.state.repository.owner.avatar_url} className="repository-img" alt="logo" />
            </div>
            <div className="col-md-9 mt20">
              <p className="repository-detail"><b>Author: </b>{this.state.repository.owner.login}</p>
              <p className="repository-detail"><b>Repository: </b>{this.state.repository.name}</p>
              <p className="repository-detail"><b>Repository: </b>{this.state.repository.description}</p>
              <p className="repository-detail"><b>Language: </b><span class="badge badge-primary">{this.state.repository.language}</span></p>
              <hr />
              <a href={this.state.repository.html_url} role="button" className="btn btn-primary">Visit repository</a>   
              <a href="/" role="button" className="btn btn-link">Back</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepositoryDetails;
