import React, { Component } from "react";
import HomePage from "./homePage";
import LoginPage from "./loginPage";
class Conditional_Rendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: true,
    };
  }

  render() {
    let element;

    const { isLogIn } = this.state;
    // if conditional rendering

    // if (isLogIn) {
    //   element = <LoginPage />;
    // } else {
    //   element = <HomePage />;
    // }
    //ternary operator
    // element = isLogIn ? <LoginPage /> : <HomePage />;

    //   return <div> {element}</div>;
    //short-circuit
    element = isLogIn && <LoginPage />;

    return <div> {element}</div>;
  }
}
export default Conditional_Rendering;
