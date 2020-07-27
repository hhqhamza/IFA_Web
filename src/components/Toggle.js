import React from "react";
import "./Toggle.css";

const Toggle = (props) => {
    return(
        <div>
            {/* <button id="toggle"><img src="../assets/logo.svg" onClick={props.click} /></button>             */}
            {/* <button id="toggle" onClick={props.click}>&#8801;</button> */}
            <button id="toggle" onClick={props.click}>&#8801;</button>
        </div>
    )
}

export default Toggle