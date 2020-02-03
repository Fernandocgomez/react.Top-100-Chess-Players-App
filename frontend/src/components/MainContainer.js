import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Players from './Players';
import SignUp from './SignUp';
import Login from './Login';
import Footer from './Footer';
import NavBar from './NavBar';
import PlayerProfile from './PlayerProfile';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginBtn: JSON.parse(localStorage.getItem('showLoginBtn')) || false,


    };
  }

  hideLoginBtns = () => {
    if (localStorage.token) {
      this.setState({
        showLoginBtn: true
      }, () => {
        localStorage.setItem('showLoginBtn', JSON.stringify(this.state.showLoginBtn))
      })
    }
  }

  logout = () => {
    localStorage.clear()
    this.setState({
      showLoginBtn: false
    })
  }

  render() {

    return (
      <BrowserRouter>

        <NavBar showLoginBtnState={this.state.showLoginBtn} logout={this.logout} hideLoginBtns={this.hideLoginBtns}/>

        <Switch>

          <Route exact path={["/home", "/"]} component={(history) => <Players
            history={history}
          />}
          />

          <Route exact path='/signup' component={(history) => <SignUp
            history={history}
          />}
          />

          <Route exact path='/login' component={(history) => <Login
            history={history} hideLoginBtns={this.hideLoginBtns}
          />}
          />

          <Route exact path='/profile' component={(history) => <PlayerProfile
            history={history} hideLoginBtns={this.state.showLoginBtn}
          />}
          />


        </Switch>

        <Footer />

      </BrowserRouter>
    );
  }
}

export default MainContainer;