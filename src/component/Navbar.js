import React from "react";
import {Link} from "react-router-dom"
export default function Navbar( {myStyle,btnText,toggleMode})  {
  return (
    <>
      <nav className="nav" style={myStyle}>
        <li><Link to="/" style={{ color: myStyle.color }}>Home</Link></li>
        <li><Link to="/contact" style={{ color: myStyle.color }}>Contact</Link></li>
        <li><Link to="/about" style={{ color: myStyle.color }}> About Us </Link></li>
        <button type="button" class="btn btn-success" onClick={toggleMode}>
          {btnText}
        </button>
        </nav>
     
    </>
  );
}
