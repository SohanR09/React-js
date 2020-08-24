import React from 'react'

//using props in const as "{props.name}"
const Hello = (props) => {
	console.log(props)
	return(
	<div>
		<h1>Hello {props.name}</h1>
	</div>
		)

	// return React.createElement(
	// 	'div',
	// 	 null, 
	// 	 React.createElement('h1',null, 'Hello Sohan!')
	// 	 )

	}


export default Hello