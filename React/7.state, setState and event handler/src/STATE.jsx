//react class component
import React, { Component } from "react";

export default class STATE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  functionNameIn = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  functionNameDe = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    //destructuring
    const { count } = this.state;
    return (
      <div>
        <h1>Count:{count}</h1>
        <button onClick={this.functionNameIn}>+</button>
        <button
          onClick={this.functionNameDe}
          disabled={count === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}
