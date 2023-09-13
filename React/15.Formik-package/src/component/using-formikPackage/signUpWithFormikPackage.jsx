import React, { useState } from "react";
//formik package
import { useFormik } from "formik";
//yup package
import * as yup from "yup";
export default function SignUpWithFormikPackage() {
  const formik = useFormik({
    initialValues: {
      name1: "",
      email1: "",
      password1: "",
    },
    //schema is structure of  data we using
    //validation schema using the Yup validation library
    validationSchema: yup.object({
      name1: yup.string().min(2, "name must have 2 characters").required(),
      email1: yup.string().email().required(),
      password1: yup
        .string()
        .min(5, "password must have 5 characters")
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" }); //reset Form values
    },
  });

  console.error(formik.errors);
  //using formik so don't need to use handel change,submit .

  //variable assigning
  const renderNameError = formik.touched.name1 && formik.errors.name1 && (
    <span className="errorTitle">{formik.errors.name1}</span>
  );
  const renderEmailError = formik.touched.email1 && formik.errors.email1 && (
    <span className="errorTitle">{formik.errors.email1}</span>
  );
  const renderPasswordError = formik.touched.password1 &&
    formik.errors.password1 && (
      <span className="errorTitle">{formik.errors.password1}</span>
    );
  const renderForm = (
    <form action="" onSubmit={formik.handleSubmit}>
      <br />
      <label htmlFor="name1">Name:</label>
      <input
        type="text"
        id="name1"
        name="name1"
        value={formik.values.name1}
        onChange={formik.handleChange}
      ></input>
      <br />
      {renderNameError}
      <br />
      <label htmlFor="email1">Email:</label>
      <input
        type="email"
        id="email1"
        name="email1"
        value={formik.values.email1}
        onChange={formik.handleChange}
      ></input>
      <br />
      {renderEmailError}
      <br />
      <label htmlFor="password1">Password:</label>
      <input
        type="password"
        id="password1"
        name="password1" // Corrected the 'name' attribute to 'password1'
        value={formik.values.password1}
        onChange={formik.handleChange}
      ></input>
      <br />
      {renderPasswordError}
      <br />
      {/* readonly computed property that returns the number of times the form has
      been submitted */}
      <button type="submit">Submit</button>
    </form>
  );
  return (
    <div>
      <h2>Control form data using Formik package</h2>
      {renderForm}
    </div>
  );
}

//{formik.submitCount > 0 && (
//     <p>
//       Name: {formik.values.name1} , Email: {formik.values.email1}, Password:{" "}
//       {formik.values.password1}
//     </p>
//   )}