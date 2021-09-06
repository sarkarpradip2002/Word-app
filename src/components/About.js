import React, { useState } from 'react'

export default function About() {
    const [style, setstyle] = useState({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
        padding: "20px"
    })
    const [mode,setmode]=useState("Enable Dark Mode");
    const switchmode = () => {
        if (style.backgroundColor === 'white') {
            setstyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
                padding: "20px"
            })
            setmode("Enable Light Mode");
        }
        else {
            setstyle({
                color: "black",
                backgroundColor: "white",
                border: "1px solid black",
                padding: "20px"
            })
            setmode("Enable dark Mode");
        }
    }
    return (
        <div style={style}>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>
                <button class="btn btn-primary mx-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Button with data-bs-target
                </button>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body"  style={style}>
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
            <button className="btn btn-success" onClick={switchmode}>{mode}</button>
        </div>
    )
}