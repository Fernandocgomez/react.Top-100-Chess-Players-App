import React from 'react';


class Players extends React.Component {
  constructor(props) {
  super(props);
  this.state = {

    players: []

  };
}

  componentDidMount(){
    fetch('http://localhost:3000/chessplayers')
    .then(resp => resp.json())
    .then( players => {
      this.setState({
        players: players
      })
    })
  };


renderCards = () => {
  
};


  render() {
    
    return (
      <div className="players-container">

        <div className="players-search-container">

          <input className="players-input"></input>
          <button className="players-btn">Search</button>

        </div>

        <div className="players-cards-container">

          <div className="players-card">
            <div className="players-img-container" >
              <img className="players-img" src="https://images.chesscomfiles.com/uploads/v1/master_player/3b0ddf4e-bd82-11e8-9421-af517c2ebfed.1e700464.160x160o.70a846b1599b.jpeg"></img>
            </div>
            <div className="players-text-container">
              <h3 className="players-h2">Name: Carlsen, Magnus</h3>
              <p className="players-p">World Rank: 1</p>
            </div>
          </div>

  
        </div>

          
        
      </div>
    );
  }
}

export default Players;