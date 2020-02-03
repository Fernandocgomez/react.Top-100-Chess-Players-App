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
   {/* {   console.log(player)} */}
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

// renderFilteredCards = (filteredPlayers) => {
//   return filteredPlayers.map( filteredPlayer => {
//     return (
//       <div className="players-card" onClick={ () => {this.redirectToProfile(filteredPlayer)}}>
//               <div className="players-img-container" >
//                 <img className="players-img" src={filteredPlayer.img}></img>
//               </div>
//             <div className="players-text-container">
//                 <h5 className="players-h2">Name:{filteredPlayer.name.substring(0,15)}</h5>
//                 <p className="players-p">World Rank: {filteredPlayer.worldrank} </p>
//             </div>
//   </div> 
//     )
//   })
// } 

searchPlayer = (e) => {
  e.preventDefault()
  // console.log(e.target)
  const filteredArray = this.state.players.filter(playerName => playerName.name.toLowerCase().includes(this.state.textInput.toLowerCase()))
  this.setState({
    filteredPlayers: filteredArray,
    searchBarUsed: true
  })
  // console.log('we are searching!', filteredArray) 
}

handelChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

  render() {

    const chessPlayers = this.state.players
    const filteredPlayers = this.state.filteredPlayers
    // console.log(this.props.history.history.push('/profile', object))

    
    if( this.state.players.length == 0){
      return (
      <div className='spinner-container'>
            <div className='loader'>
              {/* <img src='https://cdn4.iconfinder.com/data/icons/board-games-1/110/King-512.png' alt='chess piece'></img> */}
              
            </div>
            
             {/* <h2 style={{justifyContent: 'center'}}>
                LOADING..
              </h2> */}

      </div>
      )
    }
    console.log(this.state)

    return (
      <div className="players-container" >

        <form className="players-search-container" onSubmit={(e) => this.searchPlayer(e)}>

          <input className="players-input"  type='text' placeholder='Search Here' name='textInput' onChange={(e) => this.handelChange(e)} ></input>
          <button className="players-btn" type='submit'> Search</button>

        </form>

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


          { this.state.players.length > 0 ? this.state.searchBarUsed ? this.renderCards(filteredPlayers) : this.renderCards(chessPlayers): null }  

        </div>

        {/* <div onClick={() => this.renderCards()}>
         click here 
        </div> */}





      </div>
    );
  }
}

export default Players;