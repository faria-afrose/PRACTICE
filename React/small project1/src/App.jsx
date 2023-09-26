import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FatchData from "./component/fatchData/FatchData";
function App() {
  return (
    <div>
      <h2 className="headerLine">App</h2>

      <FatchData />
    </div>
  );
}

export default App;
