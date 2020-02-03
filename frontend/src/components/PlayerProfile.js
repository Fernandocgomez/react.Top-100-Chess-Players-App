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
        if (this.state.comments.length == 0) {
            return (
                <div>
                    <p>No comments have been made yet...</p>
                </div>
            )
        } else {
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

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    makeComment = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: localStorage.userId,
                chessplayer_id: this.props.history.history.location.state.id,
                content: this.state.content,
                username: localStorage.userName,
            })
        })
            .then(res => res.json())
            .then(comment => this.setState({
                comments: [...this.state.comments, comment.comment]
            }))
        e.target.reset()
        this.messagesEnd.scrollIntoView({ behavior: "smooth" })
    }




    render() {
        console.log(this.props.history.history.location.state)
        console.log(this.props.hideLoginBtns)



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


                            <div ref={(el) => { this.messagesEnd = el; }} style={{ paddingBottom: '50px' }}>

                            </div>
                        </div>

                    </div>


                    <form className='profile-form-box' onSubmit={(e) => this.makeComment(e)}>
                        <input className='profile-input' onChange={(e) => this.handelChange(e)} type="text" placeholder="type comment..." name='content'></input>
                        {this.props.hideLoginBtns ? 
                        (<>
                            <button className='profile-btn' type='submit'>Comment</button>
                        </>) : 
                        
                        (<>
                        
                            <button className='profile-btn' type='submit' disabled style={{backgroundColor: 'red', color: 'white'}}>Comment</button>
                        </>) }
                    </form>



                </div>


            </div>
        );
    }
}

export default PlayerProfile;