import React from "react";
// 1. command: npm  install react-bootstrap bootstrap 2.CSS link to main.jsx:import "bootstrap/dist/css/bootstrap.min.css";3.Take component and import it:import Button from "react-bootstrap/Button"
import Button from "react-bootstrap/Button";

function ReactBootstrap() {
  return (
    <div>
      <h1>This is React-Bootstrap </h1>
      <p>
        here by installing it we can use bootstrap . use this as a command- npm
        install react-bootstrap bootstrap
      </p>
      <Button>Deign with Bootstrap</Button>
    </div>
  );
}
export default ReactBootstrap;
