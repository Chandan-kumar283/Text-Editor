import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Textform from "./component/Textform";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import About from "./component/About";
import Contact from "./component/Contact";
import {Routes, Route} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(()=>{
      setAlert(null)
    },1500)
  };
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      showAlert("Dark mode has been Enabled","success")
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "black";
    } else {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
      });
      showAlert("Light mode has been Enabled","success")
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <div className="big-container" style={myStyle}>
        <div className="btn3">
          <Navbar myStyle={myStyle} toggleMode={toggleMode} btnText={btnText} />
          <Alert alert={alert} />
          
        </div>
        <div className="container"> 
          <switch>
          <Routes>
            <Route path="/" element={ <Textform heading="Enter The Text Below" myStyle={myStyle} showAlert={showAlert} /> }/> 
           <Route path="/contact" element={ <Contact/> }/>
           <Route path="/about" element={ <About/> }/>
          </Routes>
          </switch>
        </div>
      </div>
    </>
  );
}

export default App;
