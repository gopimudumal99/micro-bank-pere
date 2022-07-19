import React from "react";

interface props {
  text1: string;
  text2: string;
}

const SummaryAccnt: React.FC<props> = ({ text1, text2 }) => {
  return (
    <div className="account_detatils">
      <span>{text1}</span>
      <span>{text2}</span>
    </div>
  );
};

export default SummaryAccnt;
