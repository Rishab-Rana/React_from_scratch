import React from "react";

const Hero = props => {
    const{fname,fsurname}=props 
    return <h1>{props.name} {props.surname}</h1>
}


export default Hero