import React, {Component} from 'react'

//Using props in class "this.props.name"
// class Welcome extends Component{
//     render(){
//     return <h1>Welcome {this.props.name}</h1>
//     }
// }


//Destructurin 'props' in class
class Welcome extends Component{
    render(){
        const {name} = this.props
        //for state destructuring example
        // const {state1, state2} = this.state
        return(
            <h1>
                Welcome {name}
            </h1>
        )
    }
}

export default Welcome