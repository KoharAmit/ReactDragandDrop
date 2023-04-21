import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <div className="masthead flex">
      <div className="masthead-content">
        <div className="masthead-title flex">
          <h1>React DND Demo</h1>
          <i className="fa-brands fa-react"></i>
        </div>
        <p>In this tutorial we will be demoing a simple application of React's Drag and Drop package.</p>
      </div>
    </div>
    <div className="scroll-to-start">
      <div>
        <h2>Start Demo Below</h2>
      </div>
    </div>
    <section className="main-content">
      <h2>Drag and Drop</h2>
      <p>After following the steps, you can drag each of the <strong>div</strong> containers into the main board. This app uses simple HTML <strong>div</strong> elements, but React DnD supports all type of DOM <strong>HTML</strong> elements, <strong>React</strong> components, and even <strong>custom</strong> data types.</p>
    </section>
    <App />
    <section className="main-content content-bottom">
      <h2>React DnD Docs</h2>
      <p>You can view the <strong>docs</strong> located in the footer to learn more about React Dnd and its applications.</p>
    </section>
    <footer className="flex">
      <div>
        <p>COMP2106</p>
      </div>
      <div>
        <p>React Tutorial</p>
      </div>
      <div>
        <p>React Dnd <a href="https://react-dnd.github.io/react-dnd/docs/overview" target="_blank" title="React Docs">Docs</a></p>
      </div>
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
