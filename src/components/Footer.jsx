import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return(
    <footer class="footer">
      <small class="footer-logo">&copy; Places Search</small>
      <nav class="navMenu-footer">
          <ul class="navUl-footer">
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
    </footer>
  )
}

export default Footer;