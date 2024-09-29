import React, { Fragment } from "react";
import { Field, Formik } from "formik";
import { Form } from "react-router-dom";
const TextField = ({ name, placeholder, type }) => {
  return (
    <Formik>
      <Field
        className="w-[290px] h-[48px] bg-fontGray font-IRANYekan rounded-[16px] opacity-90 focus:border-teal-950"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </Formik>
  );
};

export default TextField;
