// Create structure like this : 

{/* <div id="root">
    <div id="child">
        <h1 class="heading">Hello world</h1>
    </div>
</div> */}


// let object=React.createElement("div",{id:"child"},
//     React.createElement("h1",{class:"heading"},"Hello world"));
// let root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(object);




{/* <div id="root">
    <div id="child">
        <h1 class="heading_1">Hello world</h1>
        <h2 class="heading_2">Hello everyone</h2>
    </div>
</div> */}

// let object=React.createElement("div",{id:"child"},[
//     React.createElement("h1",{className:"heading_1"},"Hello world"),
//     React.createElement("h2",{className:"heading_2"},"Hello everyone")
// ]);
// console.log(object)
// let root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(object);




{/* <div id="parent">
    <div id="child_1">
        <h1 class="heading_1">Hello world</h1>
        <h2 class="heading_2">Hello everyone</h2>
    </div>
    <div id="child_2">
        <h1 class="heading_21">Hello world</h1>
        <h2 class="heading_22">Hello everyone</h2>
    </div>
</div> */}


let object=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child_1"},[
        React.createElement("h1",{className:"heading_1"},"Hello world"),
        React.createElement("h2",{className:"heading_2"},"Hello everyone")
    ]),
    React.createElement("div",{id:"child_2"},[
        React.createElement("h1",{className:"heading_21"},"Hello world"),
        React.createElement("h2",{className:"heading_22"},"Hello everyone")
    ])
]);
console.log(object)
let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(object);