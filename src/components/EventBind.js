import React, { Component } from 'react'

//Approach 3, 4 are recommended in react.
class EventBind extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }
        //3rd way
        this.clickHandler = this.clickHandler.bind(this)
    }
     
     clickHandler(){
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }

    //4th way, Class property as arrow function
    // clickHandler = () => {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    render() {
        return (
            <div>
                <div><h1>{this.state.message}</h1></div>
                {/* Binding in the render, which is not that effective */}
                {/* <button onClick={this.clickHandler.bind(this)} >Click</button> */}

                {/* 2nd way of binding */}
                {/* <button onClick={() => this.clickHandler()} >Click</button> */}
                
                {/* 3rd way of binding, binding in constructor, used in the react mostly */}
                <button onClick={this.clickHandler} >Click</button>
            </div>
        )
    }
}

export default EventBind
