import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn: false
      }
    }

  render() {
// forth method : short curcuit
return this.state.isLogedIn && <div>Hello Rishab</div>

// // third method: turnery method
// return this.state.isLogedIn ? <div>hello rishab</div> : <div>hello guest</div>

    // // secound method: element
    // let message
    // if(this.state.isLogedIn){
    //     message = <div>hello rishab</div>
    // }
    // else{
    //     message = <div>hello guest</div>    
    // }
    // return (message)
   

//   first method - if else method
// if(this.state.isLogedIn==true){
//     return <div>hello Rishab</div>
// }
// else{
//     return <div>hello guest</div>
// }
//   }

  }
}

export default UserGreeting