import React from "react";
import ReactDOM from "react-dom/client";


let object=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child_1"},[
        React.createElement("h1",{className:"heading_1"},"Hello world"),
        React.createElement("h2",{className:"heading_2"},"Hello everyone")
    ]),
    React.createElement("div",{id:"child_2"},[
        React.createElement("h1",{className:"heading_21"},"Hello-world"),
        React.createElement("h2",{className:"heading_22"},"Hello-everyone")
    ])
]);
console.log(object)
let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(object);