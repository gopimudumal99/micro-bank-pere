import React from "react";
import "./ProfileCard.css"
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
import {RootState} from "../../redux/store"
const ProfileCard:React.FC = () => {
  let navigate = useNavigate();
  const user = useSelector((state: RootState) => state)

  return (
    <div className="profile_popup">
      <div className="profile_border">
        <div className="profile_header">
          <div className="profile_logo">
            <div>{user.full_name.charAt(0).toUpperCase()}</div>
          </div>
          <div className="profitle_name">
            <div>{user.full_name.toUpperCase()}</div>
            <div className="link cursor">{user.email}</div>
          </div>
        </div>
        <ul className="profile_main">
          <li className="cursor" onClick={()=>navigate("/editProfile")}>Edit Profile</li>
          <li className="cursor">Settings</li>
          <li className="cursor" onClick={()=>navigate("/")}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
