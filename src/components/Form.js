import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             topic: ''
        }
    }

    handleUsernameChanger = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username}, ${this.state.comment}, ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        const {username, comment, topic} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username </label>
                        <input type='text' value={username} onChange={this.handleUsernameChanger} />
                    </div>

                    <div>
                        <label>Comment </label>
                        <textarea value={comment} onChange={this.handleComment} />
                    </div>
                    <div>
                        
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopic}>
                            <option>Choose</option>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
