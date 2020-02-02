import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
  super(props);
  this.state = {


  };
}

  render() {
    
    return (
      <div className='signup-container'>

      <div className='signup-box'>

        <div className='signup-img-box'>
          <img className='signup-img' src='https://i.imgur.com/Ocz3pbJ.png'></img>
        </div>

        <form className='signup-form'>
          
          <label className='signup-label'>Username:</label>
          <input className='signup-input'></input>

          <label className='signup-label'>Password:</label>
          <input className='signup-input'></input>

          <button className='signup-btn'>Login!</button>

        </form>

        <div className='signup-redirect-box'>
          <Link className='signup-redirect'>New User? Register Is Free!</Link>
        </div>

      </div>

    </div>
    );
  }
}

export default Login;