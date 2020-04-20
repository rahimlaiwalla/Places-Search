import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <header class="header">
      <h1 class="main-logo">Search&nbsp; Places</h1>
      <nav class="navMenu">
        <ul class="navUl">
          <li >
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/careers'>Careers</Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Navigation;