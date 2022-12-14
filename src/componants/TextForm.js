import React, {useState} from "react";


export default function TextForm(props) {
const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
}

const handleLowClick = ()=>{
    let fetchText = text.toLowerCase();
    setText(fetchText);
}

const handleOnChnage =(event)=>{
    setText(event.target.value);
}
const [text, setText] = useState('Enter Text Here');
  return (
    <div>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea" value={text} onChange={handleOnChnage} rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>&nbsp;
      <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
  );
}
