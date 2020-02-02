import React from 'react';


class Players extends React.Component {
  constructor(props) {
  super(props);
  this.state = {

    players: [],
    isFlipped: false,
    filteredPlayers: []

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

  
// flipCard = () => {
//   console.log('are we hovering?')
// };

redirectToProfile = (object) => {
  this.props.history.history.push('/profile', object)
}


renderCards = (players) => {
  return players.map( player => {
    return(
 
      // console.log(player)
        <div className="players-card" onClick={ () => {this.redirectToProfile(player)}}>
                <div className="players-img-container" >
                  <img className="players-img" src={player.img}></img>
                </div>
              <div className="players-text-container">
                  <h5 className="players-h2">Name:{player.name.substring(0,15)}</h5>
                  <p className="players-p">World Rank: {player.worldrank} </p>
              </div>
        </div> 
  
    )
  })
};

renderFilteredCards = (filteredPlayers) => {
  return filteredPlayers.map( filteredPlayer => {
    return (
      <div className="players-card" onClick={ () => {this.redirectToProfile(filteredPlayer)}}>
              <div className="players-img-container" >
                <img className="players-img" src={filteredPlayer.img}></img>
              </div>
            <div className="players-text-container">
                <h5 className="players-h2">Name:{filteredPlayer.name.substring(0,15)}</h5>
                <p className="players-p">World Rank: {filteredPlayer.worldrank} </p>
            </div>
  </div> 
    )
  })
} 

searchPlayer = (player) => {
  let filteredArray = this.state.players.filter(p => p.name.toLowerCase().includes(player.toLowerCase()))
  this.setState({
    filteredPlayers: filteredArray
  })
  console.log('we are searching!', filteredArray) // the console log shows filtered array but how to display it??
}


  render() {

    const chessPlayers = this.state.players
    const filteredPlayers = this.state.filteredPlayers
    // console.log(this.props.history.history.push('/profile', object))
    

    return (
      <div className="players-container">

        <div className="players-search-container">

          <input className="players-input"></input>
          <button className="players-btn" onClick={(e) => this.searchPlayer(e.target.value)}>Search</button> 

        </div>

        <div className="players-cards-container">

          {/* <div className="players-card">
            <div className="players-img-container" >
              <img className="players-img" src="https://images.chesscomfiles.com/uploads/v1/master_player/3b0ddf4e-bd82-11e8-9421-af517c2ebfed.1e700464.160x160o.70a846b1599b.jpeg"></img>
            </div>
            <div className="players-text-container">
              <h3 className="players-h2">Name: Carlsen, Magnus</h3>
              <p className="players-p">World Rank: 1</p>
            </div>
          </div> */}
          { this.state.filteredPlayers ? (<> {this.renderCards(chessPlayers)} </>) : (<>  {this.renderFilteredCards(filteredPlayers)} </>) }  {/* i can probably use this to render the filtered part but how? */}
        </div>

        {/* <div onClick={() => this.renderCards()}>
         click here 
        </div> */}

        
       
          
        
      </div>
    );
  }
}

export default Players;