import React, {Component} from 'react'

//never modify the 'state' directly in component use 'setState'
class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    increment(){
        //increments +1 of count
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //         console.log('Callback value', this.state.count)
        //     })

        //increment +5 of count
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))

        //initial value of count after state change   
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment() 
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
               <div>Count -  {this.state.count}</div> 
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>
        )
                   
    }
}

export default Counter