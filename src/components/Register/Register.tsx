import React from "react";
import "./Register.css";

import RegisterComponent from "./RegisterComponent";

const Register: React.FC = () => {
  return (
    <div className="register_container">
      <div className="register_left"> </div>
      <RegisterComponent />
    </div>
  );
};

export default Register;
