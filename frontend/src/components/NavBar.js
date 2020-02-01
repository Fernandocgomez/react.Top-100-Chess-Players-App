import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
  super(props);
  this.state = {


  };
}

  render() {
    
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
}

export default NavBar;