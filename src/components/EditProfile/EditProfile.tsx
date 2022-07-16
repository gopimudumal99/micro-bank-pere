import React from "react";
import "./EditProfile.css";
import ImgLogo from "../../assets/image.png";
import InputBox from "../utils/Input/InputBox";
import Button from "../utils/Button/Button";

const EditProfile: React.FC = () => {
  return (
    <div className="edit_profile">
      <div>
        <h2>Edit Profile</h2>
      </div>
      <div className="edit_main">
        <div className="edit_photo">
          <div className="photo_container">
            <div className="photo_div">
              <img src={ImgLogo} alt="" />
            </div>
            <div className="photo_upload cursor">
              <span>Browse image</span>
            </div>
          </div>
          <div className="edit_from">
            <form action="">
              <InputBox type={"text"} label={"Company Name"} isPass={false} />
              <InputBox type={"text"} label={"Email Adress"} isPass={false} />
              <InputBox type={"password"} label={"Old Password"} isPass={true} />
              <InputBox type={"password"} label={"New Password"} isPass={true} />
              <InputBox type={"password"} label={"New Password"} isPass={true} />
              <InputBox type={"password"} label={"Confirm Password"} isPass={true} />
              <Button content="Update"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
