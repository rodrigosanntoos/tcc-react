import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import RepositoryDetails from './components/repository_details';
import './style/app.css';


render(( 
  <BrowserRouter>
    <div>
      <Switch >
        <Route path='/repository/:owner/:repo'component={ RepositoryDetails }/> 
        <Route path='/'component={ Home }/> 
      </Switch> 
    </div> 
  </BrowserRouter >
), document.getElementById('root'));