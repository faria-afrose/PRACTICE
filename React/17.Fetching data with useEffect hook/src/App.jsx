import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FatchDataWithUseEffect from "./component/FatchDataWithUseEffect";
import FatchDataWithUseEffectAndError from "./component/FatchDataWIthUseEffectAndError";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <FatchDataWithUseEffect />
      <FatchDataWithUseEffectAndError />
    </div>
  );
}

export default App;
