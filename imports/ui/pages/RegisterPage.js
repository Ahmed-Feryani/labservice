import React from "react";
import Register from "../components/register/Register";

const RegisterPage = ({ ok }) => {
  return (
    <div>
      <Register ok={ok}></Register>
    </div>
  );
};

export default RegisterPage;
