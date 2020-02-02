import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
  super(props);
  this.state = {


  };
}

  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signUp = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        email: this.state.email,

      })
    })
      .then(res => res.json())
      .then(console.log)
    this.props.history.history.push('/login')
  }


  render() {
    console.log(this.state)
    
    return (

      <div className='signup-container'>

        <div className='signup-box'>

          <div className='signup-img-box'>
            <img className='signup-img' src='https://i.imgur.com/Ocz3pbJ.png'></img>
          </div>

          <form className='signup-form' onSubmit={(e) => this.signUp(e)}>
            
            <label className='signup-label'>Username:</label>
            <input className='signup-input' id='username' type='text' name='username' placeholder='username' onChange={(e) => this.handelChange(e)}></input>

            <label className='signup-label'>Email:</label>
            <input className='signup-input' id='email' type='email' name='email' placeholder='email' onChange={(e) => this.handelChange(e)}></input>

            <label className='signup-label'>Password:</label>
            <input className='signup-input' id='password' type='password' name='password' placeholder='password' onChange={(e) => this.handelChange(e)}></input>

            <label className='signup-label'>Confirm Password:</label>
            <input className='signup-input' id='confirm_password' type='password' name='password_confirmation' placeholder='confirm password' onChange={(e) => this.handelChange(e)}></input>

            <button className='signup-btn' type='submit' >Register!</button>

          </form>

          <div className='signup-redirect-box'>
            <Link className='signup-redirect' to='/login'>You Already Have An Account, Login In!</Link>
          </div>

        </div>

      </div>

    );
  }
}

export default SignUp;