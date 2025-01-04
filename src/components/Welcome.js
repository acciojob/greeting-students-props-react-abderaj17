// write code for Welcome component here

import React from 'react'

const Welcome = ({name}) => {
if(!name) name = 'Guest'; //
  return (
    <div>
        <p>Hey !<h1>{name}</h1></p>
        <h2>Welcome to School.</h2>
    </div>
  )
}

export default Welcome