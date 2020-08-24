import React, { Component } from 'react'

class LifeCycleB extends Component {
// constructor method 
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sohan'
        }
        console.log('LifeCycleB constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldCOmponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, preState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }
    
    render() {
        console.log('LifeCycleB render')
        return <div>LifeCycle B</div>
        
    }
}

export default LifeCycleB
