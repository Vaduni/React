import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLowClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 className= 'mb-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#6f7a85" : "white",
              color: props.mode === "dark" ? "white" : "#0c2b3e",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button  disabled={text.length===0}  className="btn btn-secondary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}
          className="btn btn-secondary mx-2 my-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button  disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={clearText}>
          Clear Text
        </button>
        <button  disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} 
          className="btn btn-secondary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove ExtraSpaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter ((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

        <p>{0.08 * text.split(" ").filter ((element)=>{return element.length!==0}).length} Minutes read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview !"}
        </p>
      </div>
    </>
  );
}
