import React from "react";
import ReactDOM from "react-dom/client";


// JSX - HTML-like or XML-like syntax
const jsxHeading=(<h1 className="heading">
    Hello World
    </h1>)

let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);