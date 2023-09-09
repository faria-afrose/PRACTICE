import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./component/FORM/form";
import UseStateWithObject from "./component/useStateWithObject/useStateWithObject";
//for card

import Card from "react-bootstrap/Card";

export default function App() {
  return (
    <div>
      <Form />
      <UseStateWithObject />
    </div>
  );
}
