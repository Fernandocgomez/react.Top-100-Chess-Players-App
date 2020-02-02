import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
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

            <label className='signup-label'>Email:</label>
            <input className='signup-input'></input>

            <label className='signup-label'>Password:</label>
            <input className='signup-input'></input>

            <label className='signup-label'>Confirm Password:</label>
            <input className='signup-input'></input>

            <button className='signup-btn'>Register!</button>

          </form>

          <div className='signup-redirect-box'>
            <Link className='signup-redirect'>You Already Have An Account, Login In!</Link>
          </div>

        </div>

      </div>

    );
  }
}

export default SignUp;