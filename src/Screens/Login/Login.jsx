import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <NavLink to="/register">
        <div>Login</div>
      </NavLink>
    </>
  );
};

export default Login;
