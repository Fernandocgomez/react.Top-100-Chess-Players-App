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
            }, 
            comments: []


        };
    }

    componentDidMount() {
        let period = []
        let position = []
        const statistics = this.props.history.history.location.state.statistics
        statistics.forEach((stat) => {
            period.unshift(stat.period)
            position.unshift(stat.position)
        }, this.setState({
            chartData: {
                labels: period,
                datasets: [
                    {
                        label: 'Statistics Over Time',
                        data: position,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)'

                        ],

                        borderWidth: 2
                    }
                ]
            }, 
            comments: this.props.history.history.location.state.comments
        }))

    }

    renderComments = () => {
        if (this.state.comments.length == 0){
            return(
                <div>
                    <p>No comments have been made yet...</p>
                </div>
            )
        }else{
            return this.state.comments.map(comment => {
                return (
          
                    <div>
                        <p className='profile-p-username'>{comment.username}</p>
                        <p className='profile-p-content'>{comment.content}</p>
                    </div>
                )
            })
        }
        
    }


    render() {
        console.log(this.props.history.history.location.state)



        return (
            <div className='profile-container'>

                <div className='profile-box1'>

                    <div className='profile-img-box'>
                        <img className='profile-img' src={this.props.history.history.location.state.img} ></img>
                    </div>

                    <div className='profile-text-box'>
                        <div className='profile-text'>
                            <p className='profile-p'>Name: <span className='profile-p-span'>{this.props.history.history.location.state.name}</span></p>
                            <p className='profile-p'>World Rank: <span className='profile-p-span'>{this.props.history.history.location.state.worldrank}</span></p>
                            <p className='profile-p'>Country: <span className='profile-p-span'>{this.props.history.history.location.state.country}</span></p>
                        </div>

                        <div className='profile-text'>
                            <p className='profile-p'>Birthyear: <span className='profile-p-span'>{this.props.history.history.location.state.birthyear}</span></p>
                            <p className='profile-p'>Sex: <span className='profile-p-span'>{this.props.history.history.location.state.sex}</span></p>
                            <p className='profile-p'>Title: <span className='profile-p-span'>{this.props.history.history.location.state.title}</span></p>
                        </div>
                    </div>

                </div>

                <div className='profile-box2'>
                    {/* Render chart here */}
                    <Line
                        data={this.state.chartData}
                        width={200}
                        height={100}
                        options={{ maintainAspectRatio: true }}
                    />
                </div>

                <div className='profile-box3'>

                    <div className='profile-h2-box'>
                        <h2 className='profile-h2'>Comments</h2>
                    </div>

                    <div className='profile-comment-box'>

                        <div className='overflow'>

                            {this.renderComments()}


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