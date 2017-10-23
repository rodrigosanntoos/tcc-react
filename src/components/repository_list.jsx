import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import '../style/app.css';

class RepositoryList extends Component {
  renderRepositoryList() {
    return _.map(this.props.repositories, repo => {
      return (
        <div className="col-md-3" key={repo.id}>
          <div className="repository-box text-center">
            <img src={repo.owner.avatar_url} className="repository-img" alt="logo" />
            <p className="mt20 repository-text">{repo.full_name}</p>
            <Link className="btn btn-link" role="button" to={`/repository/${repo.full_name}`}>View details</Link>
          </div>
        </div>
      );
    });
  }

  render() {
    if(!this.props.repositories) {
      return (
        <h1>Carregando...</h1>
      );
    }

    return (
      <div className="row">
        {this.renderRepositoryList()}
      </div>
    );
  }
}

export default RepositoryList;