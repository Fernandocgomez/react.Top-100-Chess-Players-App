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


  };
}

  render() {
    
    return (
        <BrowserRouter>

        <NavBar />

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
            history={history}  
          />}
          />

          <Route exact path='/profile' component={(history) => <PlayerProfile
            history={history}  
          />}
          />


        </Switch>

        <Footer />

      </BrowserRouter>
    );
  }
}

export default MainContainer;