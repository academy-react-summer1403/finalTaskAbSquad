import React, { Fragment } from "react";
import { Field, Formik } from "formik";
import { Form } from "react-router-dom";
const TextField = ({ name, placeholder, type, ...reset }) => {
  return (
    <Formik>
      <Field
        className="w-0"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </Formik>
  );
};

export default TextField;
