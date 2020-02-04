import React from 'react';
import { Pie } from 'react-chartjs-2';

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      players: [],
      isFlipped: false,
      filteredPlayers: [],
      searchBarUsed: false, 

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


  redirectToProfile = (object) => {
    this.props.history.history.push('/profile', object)
  }


  renderCards = (players) => {
    
    return players.map(player => {
      let green = []
    let yello = []
    let red = []
    let blue = []
    player.statistics.forEach((position) => {
      if(position.position < 10){
        green.push(position)
      }
      if(position.position > 10 && position.position < 20){
        yello.push(position)
      }
      if(position.position > 20 && position.position < 50){
        red.push(position)
      }
      if(position.position > 50 && position.position < 101){
        blue.push(position)
      }
    })

    console.log(green.length, yello.length, red.length, blue.length)

      return (


        <div className="players-card" onClick={() => { this.redirectToProfile(player) }} key={player.id} >

          <div className="players-img-container" >

          <img className="players-img" src={player.img}></img>

          </div>

          <div className='hidden-content'>

            
            <div className='pie' style={{height: '250px', width: '250px'}}>

          <Pie
                  data= {{
                    datasets: [{
                      data: [green.length, yello.length, red.length, blue.length],
                      backgroundColor: [
                      '#168E0F',
                      '#FFF95B',
                      '#BA3030', 
                      '#54A2DD'

                      ]
                    }]
                  }}
                  width={600}
                  height={400}
                  options={{ maintainAspectRatio: true, responsive: true, }}
            />
            </div>

            <p><span className='green-position'></span> 1 - 10 Position</p>    
            <p><span className='yellow-position'></span> 11 - 20 Position</p>    
            <p><span className='red-position'></span> 21 - 50 Position</p>    
            <p><span className='blue-position'></span> 51 - 100 Position</p>    
            </div>

          <div className="players-text-container">
            <h5 className="players-h2">Name:{player.name.substring(0, 15)}</h5>
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


    if (this.state.players.length == 0) {
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

          <input className="players-input" type='text' placeholder='Search Here' name='textInput' onChange={(e) => this.handelChange(e)} ></input>
          <button className="players-btn" type='submit'> Search</button>

        </form>

        

        <div className="players-cards-container">


          {this.state.players.length > 0 ? this.state.searchBarUsed ? this.renderCards(filteredPlayers) : this.renderCards(chessPlayers) : null}


        </div>

      </div>
    );
  }
}

export default Players;