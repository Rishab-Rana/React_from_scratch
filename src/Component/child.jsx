import React from 'react'

function Child(props) {
  return (
    <button onClick={()=>props.greetHandler('from child')}>click me</button>
  )
}

export default Child