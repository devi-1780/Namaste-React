import React from "react";
import ReactDOM from 'react-dom/client';
const heading=React.createElement("h1",{id:"title"},"Heading");//React Element
console.log(heading);
const jsxElement=(<h1 id="1" className="title">
    Namaste React</h1>);
console.log(jsxElement);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxElement)