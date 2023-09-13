import React, { useState } from "react";

export default function signup() {
  const [Data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { name, email, password } = Data;
  const handelChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
    setSubmitted(true);
  };
  return (
    <div>
      <h2>Control form data</h2>
      <form action="" onSubmit={handelSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name} //binding...Bind the input field to the 'Data' state ,creates a direct connection between what the user types in the input field(controlled component)
          onChange={handelChange}
        ></input>
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email} //binding...Bind the input field to the 'Data' state ,creates a direct connection between what the user types in the input field(controlled component)
          onChange={handelChange}
        ></input>
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password} //binding...Bind the input field to the 'Data' state ,creates a direct connection between what the user types in the input field(controlled component)
          onChange={handelChange}
        ></input>
        <br />

        <button>Submit</button>
      </form>

      {submitted && (
        <div>
          <p>
            Name: {name} , Email: {email} ,Password: {password}
          </p>
        </div>
      )}
    </div>
  );
}
