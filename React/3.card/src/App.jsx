import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
//icon using import { IconName } from "react-icons/whichIcon";
// for multiple icon import { FaRegHand, FaRegHourglassHalf } from "react-icons/fa6";

import { FaRegHand, FaRegHourglassHalf } from "react-icons/fa6";
import ReactBootstrap from "./Component/React_Bootstrap/ReactBootstrap";
//for card
import Card from "react-bootstrap/Card";
function App() {
  return (
    <Card className="App">
      <h2>Card,Icon,Bootstrap use!</h2>
      <span>
        <FaRegHand className="icon" />
        <FaRegHourglassHalf className="icon" />
        {/* importing */}
        <ReactBootstrap />
      </span>
    </Card>
  );
}

export default App;
