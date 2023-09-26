import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Taggle from "./Component/Toggle/taggle";
import FAQS from "./Component/FAQ/FAQS";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Taggle />
      <FAQS />
    </div>
  );
}

export default App;
