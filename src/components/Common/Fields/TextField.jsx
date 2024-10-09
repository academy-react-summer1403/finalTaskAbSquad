import React, { Fragment } from "react";
import { Field, Formik } from "formik";
import { Form } from "react-router-dom";
import "./CourseField.css";
const TextField = ({ name, placeholder, type, ...reset }) => {
  return (
    <Formik>
      <Field
        className="CourseField"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </Formik>
  );
};

export default TextField;
