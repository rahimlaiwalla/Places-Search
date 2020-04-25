import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return(
    <footer className="footer">
      <small className="footer-logo">&copy; Places Search</small>
      <nav className="navMenu-footer">
          <ul className="navUl-footer">
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
    </footer>
  )
}

export default Footer;