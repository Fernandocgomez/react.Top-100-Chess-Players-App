import React from 'react';


class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      players: [],
      isFlipped: false,
      filteredPlayers: [],
      searchBarUsed: false

    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/chessplayers')
      .then(resp => resp.json())
      .then(players => {
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
 
      <div className="players-card" onClick={ () => {this.redirectToProfile(player)}} key = {player.id}>
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



searchPlayer = (e) => {
  e.preventDefault()
  const filteredArray = this.state.players.filter(playerName => playerName.name.toLowerCase().includes(this.state.textInput.toLowerCase()))
  this.setState({
    filteredPlayers: filteredArray,
    searchBarUsed: true
  })
}

handelChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

  render() {

    const chessPlayers = this.state.players
    const filteredPlayers = this.state.filteredPlayers

    
    if( this.state.players.length == 0){
      return (
      <div className='spinner-container'>
            <div className='loader'>
             
              
            </div>
            
      </div>
      )
    }
    

    return (
      <div className="players-container" >

        <form className="players-search-container" onSubmit={(e) => this.searchPlayer(e)}>

          <input className="players-input"  type='text' placeholder='Search Here' name='textInput' onChange={(e) => this.handelChange(e)} ></input>
          <button className="players-btn" type='submit'> Search</button>

        </form>

        <div className="players-cards-container">

          { this.state.players.length > 0 ? this.state.searchBarUsed ? this.renderCards(filteredPlayers) : this.renderCards(chessPlayers): null }  

        </div>

        
      </div>
    );
  }
}

export default Players;