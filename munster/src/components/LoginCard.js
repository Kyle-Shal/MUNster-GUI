import React from "react";
import "./LoginCard.css";

function LoginCard(){
    return(
        <div className='MainBox'>
            <center><h1> Welcome to MUNster! </h1></center>
            <button className="LoginButtons"> Continue with Google </button>
            <br></br>
            <button className="LoginButtons"> Continue with Facebook </button>
            <br></br>
            <button className="LoginButtons"> Continue with Apple </button>
            <br></br>
            <center><p> Email Address: </p></center>
            <input className="EmailInput"></input>

            <br></br>
            <br></br>
            <center><p> If you do not have an account: </p></center>
            <button className="SignupButton"> Sign Up </button>
            <br></br>
        </div>
    )
}

export default LoginCard;