import React from "react"


class Welcome extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome'
        }

        
    }

    suscribe() {

        this.setState({ message: 'thanks for subscribing :)'})

    }

        render() {
             return <div>
             <h1>{this.state.message}</h1>
            <button onClick={() => this.suscribe()}>Subscribe</button>
             </div>
        }
    }

export default Welcome