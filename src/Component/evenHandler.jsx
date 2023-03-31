import React from 'react'

function EvenHandler() {

    function handleClick(){
        alert('Clicked')
    }

  return (
    <div>
        <button onClick={handleClick}>click me</button>
    </div>
  )
}


export class ClassHandler extends React.Component{
    handleClick(){
        alert('Clicked class button');
    }
    render(){
        return (
            <button onClick={this.handleClick}>Class button</button>
        )
    }
}


export default EvenHandler 