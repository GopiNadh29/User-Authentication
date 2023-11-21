import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Welcome.scss"

export default function Welcome (){
    return(<>
    <div className="Welcomepage">
      <div>
      <div className="TextContainer">
        <h1>Welcome To Sinma</h1>
        <h3>The biggest Indian hits. Ready to watch here</h3>
    </div>
    <div className="Btn">
      <div><Link to="/LOgIn"> <button variant="Filled" className="Signin">SIGN IN </button> </Link> </div>
      <div><Link to='/SignUp'> <button variant="Filled" className="caa" > CREAT AN ACCOUNT </button> </Link></div>
  </div>
      </div>
    
    </div>
    </>)}



