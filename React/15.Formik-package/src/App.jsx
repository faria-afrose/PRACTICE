import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SignUp from "./component/signup";
import SignUpWithFormikPackage from "./component/using-formikPackage/signUpWithFormikPackage";
function App() {
  return (
    <div className="App">
      <SignUp />
      <SignUpWithFormikPackage />
    </div>
  );
}

export default App;
