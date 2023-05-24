// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, {useState} from "react";
import ReactDOM from "react-dom";

const CopyText = () =>{
    const [copyValue, setCopyValue] =  useState("");

    const valueChange = (event) =>{
        setCopyValue(event.target.value);
    }

    const copyToClipboard = () =>{
        console.log(`Copied Text" ${copyValue}"`)
    }

    return(
        <div>
            <input id="input" type="text" onChange={valueChange} value={copyValue}/>
            <br/><br/>
            <button onClick={copyToClipboard}>
               Copy to Clipboard
            </button>
            <br/><br/>
        </div>
    )
}

ReactDOM.render(<CopyText />, document.querySelector("div"));