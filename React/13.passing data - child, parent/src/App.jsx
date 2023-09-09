// App file

import React from "react";
import ParentToChild from "./parentToChild/parent2";
import ChildToParent from "./childToParent/parent1";
import Parent from "./parent,child/Parent";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <ParentToChild />
      <ChildToParent />
      <Parent />
    </div>
  );
}
