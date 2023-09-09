//importing useState
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//.module.css this structure flow
export default function useStateWithObject() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const { name, password, email } = user;

  const handelForm = (e) => {
    // const fieldName = e.target.name;
    // if (fieldName === "name") {
    //   setUser({ name: e.target.value, email, password });
    // } else if (fieldName === "email") {
    //   setUser({ name, email: e.target.value, password });
    // } else if (fieldName === "password") {
    //   setUser({ name, email, password: e.target.value });
    // }
    //    spread operator (...) to copy the existing state and then modify the specific property you want to change.
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    console.log("Data:" + name, email, password);
    console.log(user);
    e.preventDefault();
  };
  return (
    <Card>
      <h1>UseState with string</h1>

      <Card>
        <form action="" onClick={handelSubmit}>
          <h1>Registration</h1>

          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              id="name"
              value={name} //control component
              onChange={handelForm}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              id="email"
              value={email} //control component
              onChange={handelForm}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              id="password"
              value={password} //control component
              onChange={handelForm}
              required
            />
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </Card>
  );
}
