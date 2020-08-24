import React, {Component} from 'react'

//'state' is an object that privately maintain inside a componend
//'state' can influence rendering on the page
//'state' can be changed within the componend
class Msg extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing.'
        })
    }

    render(){
    return(
        <div>
            <h1>
            {this.state.message}
        </h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
        
    )
    }
}

export default Msg