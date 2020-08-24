//Rendering of HTML 

import React from 'react'

function Person({person}) {
    return (
        <div>
           <h2>
             I am {person.name}, I am {person.age} years old and my skill is {person.skill}.
           </h2> 
        </div>
    )
}

export default Person

//key props cannot be used in child Components