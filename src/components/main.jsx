import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchForm from './Search_Form.jsx';
import About from './About.jsx';
import Careers from './Careers.jsx';

const Main = () => {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={SearchForm} />
        <Route path='/about' component={About} />
        <Route path='/careers' component={Careers} />
      </Switch>
    </div>
  )
}

export default Main;