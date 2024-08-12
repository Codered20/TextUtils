import React, { useEffect } from "react";
import { useState } from "react";

const TextForm = (props) => {
    const [text, setText] = useState('');
    const [len, setLen] = useState(0);
    const [words, setWords] = useState(0)
    
    const handleUPClick = () => {
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
    }

    const handleONChange = (event) => {
        setText(event.target.value);
        handleLen();
    }
    useEffect(() => {
        const spaces = text.split(" ");
        setWords(spaces.filter(word => word.length > 0).length);
        setLen(findChar());
    },[text]); 

    const findChar = () => {
        let num = 0;
        for (let c of text) {
            if (c !== " ") { 
                num++;
            }
        }
        return num;
    };

    const handleLen = () =>{
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
                <button className="btn btn-primary mx-2 my-2" onClick={handleUPClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLCClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={Readthetext}>Read</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
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
        </>
    )
}
export default TextForm