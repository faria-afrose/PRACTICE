//importing useState
import React, { useState } from "react";
import style from "./form.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//.module.css this structure flow
export default function form() {
  //for control input field useState
  //string
  const [email, setEmail] = useState(
    "" //string
  );
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };
  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelForm = (e) => {
    // console.log("Form is submit");
    console.log("Data:" + name, email, password);
    //property and valuer name same hole just use kora jay
    // let userInfo = { name: name, password: password, email: email };
    let userInfo = { name, password, email };
    console.log(userInfo);
    //refresh prevent
    e.preventDefault();
  };
  return (
    <div className={style.cardGroup}>
      <h1>UseState with string</h1>
      <Card className={style.cardGroup}>
        <form action="" onClick={handelForm}>
          <h1>Registration</h1>

          <div className={style.formGroup}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              id="name"
              className={style.formGroupInput}
              value={name} //control component
              onChange={handelName}
              required
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              id="email"
              value={email} //control component
              onChange={handelEmail}
              className={style.formGroupInput}
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              id="password"
              className={style.formGroupInput}
              value={password} //control component
              onChange={handelPassword}
              required
            />
          </div>
          <div className={style.formGroup}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
