import React, { ChangeEvent, useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import "./Input.css";
interface props {
  type?: string;
  label: string;
  isPass: boolean;
  id: string;
  value: string;
  handleChange: (e: ChangeEvent) => void;
}

const InputBox: React.FC<props> = ({
  type,
  label,
  isPass,
  id,
  value,
  handleChange,
}) => {
  const [showPass, setShowPass] = useState<string>("password");

  const showHiddenPassword = () => {
    if (showPass === "password") {
      setShowPass("text");
    } else {
      setShowPass("password");
    }
  };

  return (
    <div className="input_container">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={(e) => handleChange(e)}
        className={type === "date" ? "input_box input_date" : "input_box"}
        type={type === "password" ? showPass : type}
        name={id}
        id={id}
        value={value}
        required
      />
      {isPass && (
        <div className="eyeIcon cursor">
          {showPass === "password" ? (
            <AiFillEyeInvisible size={23} onClick={showHiddenPassword} />
          ) : (
            <AiFillEye size={23} onClick={showHiddenPassword} />
          )}
        </div>
      )}
    </div>
  );
};

export default InputBox;
