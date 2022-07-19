import React, { useState } from "react";
import "./Nabar.css";
import { MdNotificationsActive } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import microBank from "./Micro Bank.png";
import ProfileCard from "../Cards/ProfileCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state);

  const [isProfile, setIsProfile] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">
          <img src={microBank} alt="logo" />
        </div>
        <h2 className="title">ABC Pvt. Ltd.</h2>
        <div className="nav-right">
          <div className="notifyIcon">
            <MdNotificationsActive />
          </div>
          <div className="profileImg">
            <div>{user.full_name.charAt(0).toUpperCase()}</div>
          </div>
          <div className="downLogo" onClick={() => setIsProfile(!isProfile)}>
            <AiFillCaretDown />
          </div>
        </div>
      </nav>
      {isProfile && <ProfileCard />}
    </>
  );
};

export default Navbar;
