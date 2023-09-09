import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hooks_UseState from "./Hooks_UseState/Class_Component_traditional_thisState";
import Hooks_UseState2 from "./Hooks_UseState/Hooks_UseState_Function";
import Index from "./Hooks_UseState/Upadte_State_BasedOn_Privous_State/index.jsx";

export default function App() {
  return (
    <div>
      <Hooks_UseState />
      <Hooks_UseState2 />
      <Index />
    </div>
  );
}
