import React, { Component } from "react";

export default class Class_Component_traditional_thisState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handelButton = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <h6>Hooks UseState -Class </h6>

        <button onClick={this.handelButton}>Click Here</button>
      </div>
    );
  }
}
