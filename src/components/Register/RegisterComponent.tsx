import React, { FormEvent, ChangeEvent, useState } from "react";
import InputBox from "../utils/Input/InputBox";
import Button from "../utils/Button/Button";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { postData } from "../../api/apis";
import { UserData } from "../../Data/dataTypes";

let infoUser: UserData = {
  id: uuidv4(),
  full_name: "",
  date_incorporation: "",
  email: "",
  password: "",
  confirm_pass: "",
};

const RegisterComponent: React.FC = () => {
  const [state, setState] = useState<UserData>(infoUser);
  let navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (state.password === state.confirm_pass) {
      postData(state);
      navigate("/login");
    } else {
      alert(" Password not match please try again! ");
    }
  };

  const handleChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <div className="register_right">
        <h1>Create an Account</h1>
        <form action="" onSubmit={handleSubmit}>
          <InputBox
            type={"text"}
            label={"Full Name"}
            id={"full_name"}
            isPass={false}
            value={state.full_name}
            handleChange={handleChange}
          />
          <InputBox
            type={"date"}
            label={"Date of Incorporation"}
            id={"date_incorporation"}
            isPass={false}
            value={state.date_incorporation}
            handleChange={handleChange}
          />
          <InputBox
            type={"email"}
            label={"Email"}
            id={"email"}
            isPass={false}
            value={state.email}
            handleChange={handleChange}
          />
          <InputBox
            type={"password"}
            label={"Password"}
            id={"password"}
            isPass={true}
            value={state.password}
            handleChange={handleChange}
          />
          <InputBox
            type={"password"}
            label={"Confirm Password"}
            id={"confirm_pass"}
            isPass={true}
            value={state.confirm_pass}
            handleChange={handleChange}
          />
          <Button content="Create an Account" />
        </form>
        <div className="reg_login_txt">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
