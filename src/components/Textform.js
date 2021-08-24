import React, {useState} from 'react'
export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText)

    }
    const handleClearClick = ()=>{
        console.log("Clear Text was clicked" + text);
        let newText = '';
        setText(newText)

    }

    const handleOnChange = (event)=>{
        console.log("On change!");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        console.log("I am copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);


    }
    const [text, setText] = useState(' ');
    return (
    <>
    <div className= "container" style={{background: props.mode===`light`?`white `:`#3973dc`}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode===`dark`?`grey`:`white`}} id="mybox" rows="8"></textarea>
    </div>

    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text</button>
    </div>
    <div className="container my-3" style={{background: props.mode===`light`?`white `:`#3973dc`}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008* text.split(" ").length}   Minutes Required to read    </p>
            <h2> Preview </h2>
            <p> {text.length>0?text:"Enter something to preview it"}   </p>
    </div>
        
    </>
    )
}
