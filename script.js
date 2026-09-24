import React from "react";
import ReactDOM from "react-dom/client";

// method 1 using react

// const parent = React.createElement("div", {}, [
//   React.createElement("h1", { id: "h1-react" }, "Hello world from react"),
//   React.createElement("h2", {id: "h2-react"}, "Hello h2"),
//   React.createElement("div", {id: "child-div", className: "child"}, [
//     React.createElement("h1", {id:"child-div1", className: "child"}, "I am h1 of child-div"),
//     React.createElement('h2', {id:"child-div2", className: "child"}, "I am h2 of child-div")
//   ])
// ]);

// let root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(parent);

//method 2 using jsx

const heading = (
  <div>
    <h1 className="style">Hello Heading</h1>
    <p style={{ color: "blue", backgroundColor: "yellow" }}>
      I am paragraph tag from Jsx
    </p>
  </div>
);

const body = (
  <div>
    <h4>I am body</h4>
    <p>I am para inside body</p>
  </div>
);
const parent = (
  <div
    style={{
      backgroundColor: "pink",
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    }}
  >
    {heading}
    {body}
  </div>
);

document.body.style.margin = "0";
document.body.style.backgroundColor = "pink";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
