import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const jsToHtml = "This msg from js to jsx";
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <h1 className="headingStyle">First card </h1>
      <p>
        Door only in curtain seat as, all saintly dreaming and raven open. I its
        deep a muttered into the footfalls, croaking chamber more of chamber. Me
        nevermore desert more myself.
      </p>
      <h2>{jsToHtml}</h2>
      <p>{currentYear}</p>
    </div>
  </React.StrictMode>
);
