import React,{useState} from 'react'

export default function Textarea(props) {
    const [text,settext]=useState(" ");
    const changetouppercase=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const changetolowercase=()=>{
        let newtext=text.toLowerCase();
        settext(newtext);
    }
    const cleartext=()=>{
        let newtext=" ";
        settext(newtext);
    }
    const onchangevalue=(event)=>{
       settext(event.target.value);
    }
    const removespace=()=>{
        const space=text.split(/[ ]+/);
        const join=space.join(" ");
        settext(join);
    }
    return (
        
        <>
        <div>
        <div className="form-floating">
            <h2 className={`text-${props.mode==='light'? 'dark' : 'light'}`}>{props.heading}</h2>
            <textarea className={`form-control text-${props.mode==='light'? 'dark' : 'light'} bg-${props.mode==='light'? 'light' : 'dark'}` }  value={text} onChange={onchangevalue} rows='8' ></textarea>
        </div>
        <button onClick={changetouppercase} type="button" className="btn btn-success my-3">Change to uppercase</button>
        <button onClick={changetolowercase} type="button" className="btn btn-success my-3 mx-3">Change to lowercase</button>
        <button onClick={cleartext} type="button" className="btn btn-success my-3 mx-3">Clear Text</button>
        <button onClick={removespace} type="button" className="btn btn-success my-3 mx-3">Remove extra space</button>
        </div>
        <div className={`text-${props.mode==='light'? 'dark' : 'light'}`}>
            <h4>Text Calculations</h4>
            <p>{text.split(" ").filter((elem)=>{return elem.length!==0}).length} words {text.length} characters</p>
            <h4>Reading time</h4>
            <p>{0.008 * text.split(" ").filter((elem)=>{return elem.length!==0}).length} time needed to read the text</p>
            <h4>Preview corrected text</h4>
            <p>{text}</p>
        </div>
        </>
    )
}