import React, { useState } from "react";

export default function Textform(props) {
  const [captext, setCaptext] = useState("Uppercase the Letter");
  const handleUpClick = () => {
    if (!text) {
      props.showAlert("Please enter some text first", "warning");
      return;
    }
    if (text === text.toUpperCase()) {
      setText(text.toLowerCase());
      setCaptext("UpperCase the Letter");
      props.showAlert("Converted to Lowercase", "success");
    } else {
      setText(text.toUpperCase());
      setCaptext("LowerCase the Letter");
      props.showAlert("Converted to Uppercase", "success");
    }
  };

  const handleCopyText = () => {
    if (!text) {
      props.showAlert("Please enter some text first", "warning");
      return;
    }
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [isBold, setIsBold] = useState(false);
  const handleBoldText = () => {
    if (!text) {
      props.showAlert("Please enter some text first", "warning");
      return;
    }
    setIsBold(!isBold);
    props.showAlert(isBold ? "Text Unbolded" : "Text Bolded", "success");
  };
  const [text, setText] = useState("");

  const handleClearText = () => {
    if (!text) {
      props.showAlert("Please enter some text first", "warning");
      return;
    }
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const wordCount =
    text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
  const letterCount = text.replace(/\s+/g, "").length;
  return (
    <>
      <h1>
        {" "}
        Text Editor
      </h1>
      <div className="container">
        <h5>{props.heading}</h5>
        <textarea
  className="form-control" 
  value={text}
  onChange={handleOnChange}
  id="myBox"
  rows="8"
  placeholder="Enter Your Text"
  style={{ 
    fontWeight: isBold ? "bold" : "normal" , 
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    color: 'white', border: 'none'
  }} 
/>
        <div className="container my-0">
        <p>
          <strong>
          Your Text contains  {" "}
            {wordCount} Words & {letterCount} Letters{" "}
          </strong>
        </p>
      </div>
        <div className="btn-group my-0" >
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            {captext}
          </button>
          <button className="btn btn-dark mx-2" onClick={handleBoldText}>
            {isBold ? "Unbold Text" : "Bold Text"}
          </button>
          <button className="btn btn-secondary mx-2" onClick={handleClearText}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopyText}>
            📋 Copy Text
          </button>
        </div>
      </div>
      
    </>
  );
}
