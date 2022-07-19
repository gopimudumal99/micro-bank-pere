import React from "react";
import "./Button.css";

interface props {
  content: string;
}

const Button: React.FC<props> = ({ content }) => {
  return (
    <div>
      <button type="submit" className="register_btn">
        {content}
      </button>
    </div>
  );
};

export default Button;
