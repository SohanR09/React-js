import React from 'react'

//using props in const as "{props.name}"
//Destructuring 'props' by passing the parameter 'name'
//run way 1, 2 & 3 simultaneously

//Way 1 (destructuring)
//asign '{name}' equals 'props'
const Greet = props => {
	const {name} = props
	return (
		<h1>
			Hello {name} 
		</h1>
	)
}

//Way 2 (destructuring)
//directly passing the argument '{name}'
// const Greet = ({name}) => {
// 	return (
// 		<h1>
// 			Hello {name} 
// 		</h1>
// 	)
// }

//way 3
//using 'props' 
// const Greet = (props) => {
// 	console.log(props)
// 	return (
// 		<h1>
// 			Hello {props.name} 
// 		</h1>
// 	)
// }

export default Greet