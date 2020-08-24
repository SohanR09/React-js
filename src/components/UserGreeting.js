import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state ={
            isLoggedIn: true
        }
    }

    render() {
//4th way, Short circuit Method.
     return this.state.isLoggedIn && <div>Welcome Sohan!</div>

//Simpliest method (3rd way), ternary operator.
    // return(
    //     this.state.isLoggedIn ? (
    //         <div>Welcome Sohan!</div>
    //     ) : (
    //         <div>Welcome Guest!</div>
    //     )
    // )



//2nd way, shorter and efficient, Element variable.
    //    let message
    //    if (this.state.isLoggedIn){
    //        message = <div>Welcome Sohan!</div>
    //    } else{
    //        message = <div>Welcome Guest!</div>
    //    }

    //     return <div>{message}</div>


//1st way, lendy approach, if-else method.
        // if (this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Sohan!
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             Welcome Guest!
        //         </div>
        //     )
        // }


        // return (
        //     <div>
        //         <div>Welcome Sohan!</div>
        //         <div>Welcome Guest!</div>
        //     </div>
        // )
    }
}

export default UserGreeting
