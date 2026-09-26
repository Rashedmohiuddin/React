import React from "react";
import ReactDOM from "react-dom/client";

// method 1 using react

//example 1

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

//example 1
// const heading = (
//   <div>
//     <h1 className="style">Hello Heading</h1>
//     <p style={{ color: "blue", backgroundColor: "yellow" }}>
//       I am paragraph tag from Jsx
//     </p>
//   </div>
// );

// const body = (
//   <div>
//     <h4>I am body</h4>
//     <p>I am para inside body</p>
//   </div>
// );
// const parent = (
//   <div
//     style={{
//       backgroundColor: "pink",
//       minHeight: "100vh",
//       width: "100vw",
//       margin: 0,
//       padding: 0,
//       boxSizing: "border-box",
//     }}
//   >
//     {heading}
//     {body}
//   </div>
// );

// document.body.style.margin = "0";
// document.body.style.backgroundColor = "pink";

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(parent);

//example 2

// react component that return jsx

const Heading = () => {
  return (
    <div className="style">
      <h1>I am heading from react</h1>
      <p>I am para from react</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-color">
      <h4>Bofy section</h4>
      <p>i am para from Body</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="fore-and-b-g">
      <h4 >Footer section</h4>
      <p>Home</p>
      <p>About</p>
      <p>Contacts</p>
      <p>Social media</p>
    </div>
  );
};
const AppLayout = () => {
  return (
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
      <Heading />
      <Body />
      <Footer />
    </div>
  );
};

document.body.style.margin = "0";
document.body.style.backgroundColor = "pink";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);

//1 .to js code in parent we have to use {heading}
//2. But if we have to Add components we ahve to use <Heading></Heading> or self closing tag like this <Heading />
