import React from "react";
import { useState } from "react";

const TextForm = (props) => {
    // const  = "Enter your text"
    const [text, setText] = useState('');
    const [len, setLen] = useState(0);
    const [words, setWords] = useState(0)
    // const [repl, setRepl] = useState('');
    // const [wih, setWih] = useState('');
    // const handleReplace = (event) => {
    //     setRepl(event.target.value);
    // }
    // const handleWReplace = (event) => {
    //     setWih(event.target.value);
    // }
    // const handleRPClick = () => {
    //     setText(text.replace(repl, wih));
    // }
    const handleUPClick = () => {
        // console.log(text + " UpperCase");
        setText(text.toUpperCase());
    }

    const handleLCClick = () => {
        setText(text.toLowerCase())
    }

    const Readthetext=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleClear=()=>{
        setText('');
        setWords(0);
        setLen(0);
        // setRepl('');
        // setWih('');
    }

    const handleONChange = (event) => {
        // console.log(text+ "Onchange");
        setText(event.target.value)
        const spaces = text.split(" ").length;
        setWords(spaces);
        setLen(text.length);
    }

    return (
        <>
            <div className="container my-2" style={{color:props.Mode==='light'? '#212529':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.Mode==='dark'? '#212529':'white', color:props.Mode==='light'? '#212529':'white'}}  onChange={handleONChange} id="myText" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLCClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={Readthetext}>Read</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3" style={{color:props.Mode==='light'? '#212529':'white'}}>
                <h2>Summary of the text</h2>
                <p>{words} words and {len} characters</p>
                <p>Reading time: {0.008 * words} minutes</p>
            </div>
            <hr style={{color:props.Mode==='light'? '#212529':'white'}}></hr>
            <div className="container my-2" style={{color:props.Mode==='light'? '#212529':'white'}}>
                <h1>Preview</h1>
                <p>{text.length===0? "Enter your text to preview it here":text}</p>
            </div>
            <hr style={{color:props.Mode==='light'? '#212529':'white'}}></hr>
            {/* <div className="container my-2" style={{color:props.Mode==='light'? '#212529':'white'}}>
                <h3>Replace the word</h3>
                <input className="form-control my-3" value={repl} onChange={handleReplace} id="replace" rows="1"></input>
                <h3>with</h3>
                <input className="form-control my-3" value={wih} onChange={handleWReplace} id="replaceW" rows="1"></input>
                <button className="btn btn-primary mx-2" onClick={handleRPClick}>Replace</button>
            </div> */}
        </>
    )
}
export default TextForm