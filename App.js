import React from "react";
import ReactDOM from "react-dom/client";


// React Element
const heading=(<h1 className="heading">
    Hello World
    </h1>);


// React Component
    // Class Based Component
    // Functional Component

const HeadingComponent=()=>{
    return <h1 className="heading">React Functional Component</h1>;
}

let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);