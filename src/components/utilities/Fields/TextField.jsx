import React, { Fragment } from "react";
import { Field, Formik } from "formik";
import { Form } from "react-router-dom";
const TextField = () => {
  return (
    <Formik>
      <Field type="text" placeholder="input your text here..." />
    </Formik>
  );
};

export default TextField;
