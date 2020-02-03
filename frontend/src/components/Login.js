import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
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

  Login = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password

      })
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem('token', user.token)
        if(localStorage.token === user.token){
          localStorage.setItem('userId', user.user.id)
          localStorage.setItem('userName', user.user.username)
        }
        if(localStorage.token === user.token){
          this.props.hideLoginBtns()
          this.props.history.history.push('/')
        }else{
          alert('Password or email is invalid')
        }
      })
  }

  render() {
    
    return (
      <div className='signup-container'>

      <div className='signup-box'>

        <div className='signup-img-box'>
          <img className='signup-img' src='https://i.imgur.com/Ocz3pbJ.png'></img>
        </div>

        <form className='signup-form' onSubmit={(e) => this.Login(e)}>
          
          <label className='signup-label'>Username:</label>
          <input className='signup-input' onChange={(e) => this.handelChange(e)} type="text" placeholder="username" name='username'></input>

          <label className='signup-label'>Password:</label>
          <input className='signup-input' onChange={(e) => this.handelChange(e)} type="password" placeholder="Password" name='password'></input>

          <button className='signup-btn' type='submit'>Login!</button>

        </form>

        <div className='signup-redirect-box'>
          <Link className='signup-redirect' to='/signup'>New User? Register Is Free!</Link>
        </div>

      </div>

    </div>
    );
  }
}

export default Login;