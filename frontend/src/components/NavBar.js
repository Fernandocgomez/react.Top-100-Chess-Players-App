import React from 'react';
import { Link } from 'react-router-dom';
let x = false
function NavBar(props) {
  return (
    <div className="nav-bar">

      <div className='logo'>

        <Link className='logo-text' to='/home'>Logo</Link>


      </div>

      <div className='nav-links'>

        {props.showLoginBtnState ?
          (<>

            <Link className='themes-link' to="/" >Players</Link>
            <p className='themes-link' >Hello {localStorage.userName}</p>
            <Link className='themes-link' to="/login" onClick={props.logout} >Logout</Link>

          </>)
          :
          (<>

            <Link className='themes-link' to="/" >Players</Link>
            <Link className='themes-link' to="/signup" >Register</Link>
            <Link className='themes-link' to="/login" >Login</Link>
          </>)}



      </div>

    </div>
  );
}

export default NavBar;