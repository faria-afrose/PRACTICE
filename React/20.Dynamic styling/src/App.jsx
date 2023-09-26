import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (name.length < 2) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);
  const handelChange = (e) => {
    setName(e.target.value);
    console.log(name);
    console.log(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={handelChange}
        className={validInput ? "valid" : "invalid"}
      />
    </>
  );
}

export default App;
