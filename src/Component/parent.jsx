import React, { Component } from 'react'
import Child from './child'

class Parent extends Component {
  constructor() {
    super()
  
    this.state = {
       parentName: 'parent'
    }

    this.greet = this.greet.bind(this)
  }

  greet(childName){
    alert(`Hello ${this.state.parentName} ${childName}`)
  }
  render() {
    return (
      <Child greetHandler={this.greet}/>
    )
  }
}

export default Parent