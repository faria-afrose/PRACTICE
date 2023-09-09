import React, { Component } from "react";

export default class Event_Handler_Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeAbleValue: "",
    };
  }

  handelOnChange = (e) => {
    //   console.log(e.target.value);
    this.setState(
      {
        changeAbleValue: e.target.value,
      },
      //second parameter  bcz we want to see the value in consol when value is changing. seeing this instant we need to use another parameter.
      () => {
        console.log(this.state.changeAbleValue);
      }
    );
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handelOnChange} />
        <p>{this.state.changeAbleValue}</p>
      </div>
    );
  }
}

// import React, { Component } from "react";
//ES6 function
// export default class extends Component {
//   handelClick = () => {
//     console.log("click");
//   };

// render() {
// return (
//   <div>
//     <button onClick={this.handelClick}>Click here</button>
//   </div>
// );
// }
