import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div className="nav-bar">

      <div className='logo'>

      <Link className='logo-text' to='/home'>Logo</Link>
      

      </div>

      <div className='nav-links'>

        <Link className='themes-link' to="/" >Players</Link>
        <Link className='themes-link' to="/signup" >Register</Link>
        <Link className='themes-link' to="/login" >Login</Link>

      </div>
      
    </div>
    );
}

export default NavBar;