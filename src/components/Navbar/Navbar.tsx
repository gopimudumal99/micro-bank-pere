import React from "react";
import "./Nabar.css";
import { MdNotificationsActive } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import microBank from "./Micro Bank.png";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={microBank} alt="logo" />
      </div>
      <h2 className="title">ABC Pvt. Ltd.</h2>
      <div className="nav-right">
        <div className="notifyIcon">
          <MdNotificationsActive />
        </div>
        <div className="profileImg">GM</div>
        <div className="downLogo">
          <AiFillCaretDown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
