import React, { Component } from 'react'

class BindingEvent extends Component {
    constructor(){

        super();

        this.state ={
            messgae: 'Hello !'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    //     clickHandler(){
    //     this.setState({messgae: 'Good Bye!'})
    // }

    clickHandler = () => {
        this.setState({messgae: 'bye bye :)'})
    }
  render() {
    return (
      <div>
        <h1>{this.state.messgae}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
        {/* <button onClick={this.clickHandler}>Click me</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click me</button> */}
        <button onClick={this.clickHandler}>Click me</button>
        </div>
    )
  }
}

export default BindingEvent