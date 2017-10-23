import React from 'react';
import logo from '../images/logo.svg';
import '../style/app.css';

const Header = () => {
  return (
    <div className="row pn">
      <div className="col-md-12 pn">
        <div className="app-header text-center">
          <img src={logo} className="app-logo" alt="logo" />
          <h3>Search github repositories with React</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
















