import React from 'react';
import { Line } from 'react-chartjs-2';

class PlayerProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            chartData: {
                labels: [],
                datasets: [
                    {
                      label: 'Statistics Over Time', 
                      data: [
                          
                      ],
                      backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                      ],
                      borderColor: [
                          'rgba(54, 162, 235, 1)'
                          
                      ],
                      
                      borderWidth: 2  
                    }
                ]
            }


        };
    }

    componentDidMount() {
        let period = []
        const statistics = this.props.history.history.location.state.statistics
        statistics.forEach((stast) => {
            
        })
    }


    render() {
        console.log(this.props.history.history.location.state.statistics)
        console.log(this.state.chartData.labels)
        console.log(this.state.chartData.datasets[0].data)
        return (
            <div className='profile-container'>

                <div className='profile-box1'>

                    <div className='profile-img-box'>
                        <img className='profile-img' src='https://images.chesscomfiles.com/uploads/v1/master_player/3b0ddf4e-bd82-11e8-9421-af517c2ebfed.1e700464.160x160o.70a846b1599b.jpeg' ></img>
                    </div>

                    <div className='profile-text-box'>
                        <div className='profile-text'>
                            <p className='profile-p'>Name: <span className='profile-p-span'>Fernando</span></p>
                            <p className='profile-p'>World Rank: <span className='profile-p-span'>1</span></p>
                            <p className='profile-p'>Country: <span className='profile-p-span'>Mexico</span></p>
                        </div>

                        <div className='profile-text'>
                            <p className='profile-p'>Birthday: <span className='profile-p-span'>10/02/1993</span></p>
                            <p className='profile-p'>Sex: <span className='profile-p-span'>Male</span></p>
                            <p className='profile-p'>Title: <span className='profile-p-span'>Gran Master</span></p>
                        </div>
                    </div>

                </div>

                <div className='profile-box2'>
                    {/* Render chart here */}
                    <Line 
                    data={this.state.chartData}
                    width={200}
                    height={100}
                    options={{ maintainAspectRatio: true}}
                />
                </div>

                <div className='profile-box3'>

                    <div className='profile-h2-box'>
                        <h2 className='profile-h2'>Comments</h2>
                    </div>

                    <div className='profile-comment-box'>

                        <div className='overflow'>

                             {/* Render comments here here */}

                            <div>
                            <p className='profile-p-username'>Username:</p>
                            <p className='profile-p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                            </div>
                            <div>
                            <p className='profile-p-username'>Username:</p>
                            <p className='profile-p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                            </div>
                            <div>
                            <p className='profile-p-username'>Username:</p>
                            <p className='profile-p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                            </div>
                            <div>
                            <p className='profile-p-username'>Username:</p>
                            <p className='profile-p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                            </div>
                            <div>
                            <p className='profile-p-username'>Username:</p>
                            <p className='profile-p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                            </div>
                            <div>
                            <p className='profile-p-username'>Username:</p>
                            <p className='profile-p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                            </div>
                            <div>
                            <p className='profile-p-username'>Username:</p>
                            <p className='profile-p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                            </div>


                        </div>

                


                    </div>

                    <div className='profile-form-box'>
                        <input className='profile-input'></input>
                        <button className='profile-btn'>Comment</button>
                    </div>

                </div>


            </div>
        );
    }
}

export default PlayerProfile;