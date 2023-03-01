import React, { useState } from "react";

import Form from "react-bootstrap/Form";

export default function Navbar(props) {
  const handleUpClicked = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Uppercase", "success");
  };

  const handleInverse = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    // for (let i = 0; i > text.length; i++) {
    //   if (text) newText = text.includes("f");
    // }
    setText(newText);
    props.showalert("Converted to Uppercase", "success");
  };

  const handleOnChange = (events) => {
    setText(events.target.value);
  };
  const [text, setText] = useState("Hello mf");
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "grey",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <label htmlFor="Text arera">Text area</label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          value={text}
          style={{
            height: "100px",
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
          row="8"
        />
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClicked}>
          To UpperCase
        </button>

        <button className="btn btn-primary my-3 mx-1" onClick={handleInverse}>
          Inverse
        </button>

        <div className="container">
          <h1>TextSummary</h1>
          <p>
            {text.split(" ").length} words , {text.length} Characters{" "}
          </p>

          <h2>Preview</h2>
          <p>
            {text.length > 0 ? text : "Write something in  textbox to preview"}
          </p>
        </div>
      </div>
    </div>
  );
}
