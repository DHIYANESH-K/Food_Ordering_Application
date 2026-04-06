import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent=()=>{
    return <h1 className="heading">React Functional Component</h1>;
}

const heading=(<h1 className="heading">
    Hello World
    {HeadingComponent()}
    <HeadingComponent/>
    <HeadingComponent></HeadingComponent>
    </h1>);


let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);