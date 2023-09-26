import React, { useState } from "react";

export default function taggle() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle && (
        <p className="toggleClass">
          In React, a "toggle" typically refers to the action of switching
          between two states or values, often used for showing or hiding
          content, changing the appearance of an element, or toggling a feature
          on or off. This can be achieved in various ways in React, depending on
          the specific use case and the components you're working with.
        </p>
      )}

      {/* functional approch */}
      <button
        onClick={() => {
          setToggle(!toggle);
          //value true naki false toggle hbe!
        }}
      >
        {toggle ? "Hide" : "Show"}
      </button>
    </div>
  );
}
