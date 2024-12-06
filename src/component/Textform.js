import React, { useState } from "react";

export default function Textform(props) {
  const [captext, setCaptext] = useState("Uppercase the Letter")
  const handleUpClick = () => {
    if (!text) {
      props.showAlert("Please enter some text first", "warning");
      return;
    }
    if (text === text.toUpperCase()) {
      setText(text.toLowerCase());
      setCaptext("UpperCase the Letter")
      props.showAlert("Converted to Lowercase","success")
    } else {
      setText(text.toUpperCase());
      setCaptext("LowerCase the Letter")
      props.showAlert("Converted to Uppercase","success")
    }
  };
  
  const handleCopyText = () => {
    if (!text) {
      props.showAlert("Please enter some text first", "warning");
      return;
    }
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [isBold, setIsBold] = useState(false)
  const handleBoldText = () => {
    if (!text) {
      props.showAlert("Please enter some text first", "warning");
      return;
    }
    setIsBold(!isBold);
     props.showAlert(isBold ? "Text Unbolded" : "Text Bolded", "success" );
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

  return (
    <>
     <h1>𝓣𝓮𝔁𝓽 𝓔𝓭𝓲𝓽𝓸𝓻</h1>
      <div className="container">
        <h5>{props.heading}</h5>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          placeholder="Enter Your Text"
          style={{ fontWeight: isBold ? "bold" : "normal" }}
        />
        <div className="btn-group">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            {captext}
          </button>
          <button className="btn btn-dark mx-2" onClick={handleBoldText}>
          {isBold ? "Unbold Text" : "Bold Text"}
          </button>
          <button className="btn btn-danger mx-2" onClick={handleCopyText}>
            Copy to Clipboard
          </button>
          <button className="btn btn-secondary mx-2" onClick={handleClearText}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h4>Preview</h4>
        <p style={{ fontWeight: isBold ? "bold" : "normal" }}>{text}</p>
      </div>
    </>
  );
}
