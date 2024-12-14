import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Textform from "./component/Textform";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import About from "./component/About";
import Contact from "./component/Contact";


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
  const renderPage = () => {
    switch (window.location.pathname) {
      case "/":
        return <Textform heading="Enter The Text Below" showAlert={showAlert} />;
      case "/contact":
        return <Contact />;
      case "/about":
        return <About />;
      default:
        return <Textform heading="Enter The Text Below" showAlert={showAlert} />;
    }
  };
  return (
    <>
    <div className="bg">
      <div className="big-container">
        <div className="btn3">
          <Navbar />
          <Alert alert={alert} />
          
        </div>
        <div className="container">
            {renderPage()} 
          </div>
      </div>
      </div>
    </>
  );
}

export default App;
