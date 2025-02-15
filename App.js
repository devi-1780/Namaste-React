import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';

const Title=()=>{
    return <h1>Namaste React</h1>
}
const HeadingComponent=()=>{
    return <div id="container">
        <Title />
        <h1>Namaste React functional component</h1>
    </div>
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);