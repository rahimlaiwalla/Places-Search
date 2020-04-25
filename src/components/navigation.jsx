import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.svg';


const Navigation = () => {
  return(
    <header className="header">
      <div className="main-logo">
        <img src={Logo} className="logo" />
        <h1 className="appName">Search&nbsp; Places</h1>
      </div>
      <nav className="navMenu">
        <ul className="navUl">
          <li >
            <Link to='/search'>Home</Link>
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