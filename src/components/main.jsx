import React, {Component} from 'react';
import {Switch, Route, useParams, useRouteMatch, Redirect} from 'react-router-dom';
import SearchForm from './Search_Form.jsx';
import About from './About.jsx';
import Careers from './Careers.jsx';
import PlaceArray from './placeArray.jsx';

const Main = () => {

  let {path, url} = useRouteMatch();

  return(
    <div>
      <Switch>
        <Route
          path='/search'
          // render={props => <SearchForm {...props} />} 
          component={SearchForm}
          />
        <Route path='/about' component={About} />
        <Route path='/careers' component={Careers} />
      </Switch>

      {url == '/' ?
        <Redirect to='/search' />
        : null  
      }
    </div>
  )
}

export default Main;