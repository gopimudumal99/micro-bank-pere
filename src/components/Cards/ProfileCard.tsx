import React from "react";
import "./ProfileCard.css"
import {useNavigate} from "react-router-dom"

const ProfileCard:React.FC = () => {
  let navigate = useNavigate();

  return (
    <div className="profile_popup">
      <div className="profile_border">
        <div className="profile_header">
          <div className="profile_logo">
            <div>GM</div>
          </div>
          <div className="profitle_name">
            <div>Gopi Mudumal</div>
            <div className="link cursor">gopimudumal99@gmail.com</div>
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
