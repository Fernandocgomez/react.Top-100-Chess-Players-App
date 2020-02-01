import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import MainContainer from './components/MainContainer';



class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {


  };
}

  render() {
    
    return (
      <BrowserRouter>
      

        <Switch>
          
          <Route component={(history) => <MainContainer history={history} />} />
          
        </Switch>
      
      </BrowserRouter>
    );
  }
}

export default App;
