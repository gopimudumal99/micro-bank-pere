import React from "react";
import "./EditProfile.css";
import ImgLogo from "../../assets/image.png";
import InputBox from "../utils/Input/InputBox";
import Button from "../utils/Button/Button";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const EditProfile: React.FC = () => {
  return (
    <>
      <Navbar />
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
                <InputBox
                  type={"text"}
                  label={"Company Name"}
                  id={"company_name"}
                  isPass={false}
                  value={""}
                  handleChange={() => {}}
                />
                <InputBox
                  type={"text"}
                  label={"Email Adress"}
                  id={"email"}
                  isPass={false}
                  value={""}
                  handleChange={() => {}}
                />
                <InputBox
                  type={"password"}
                  label={"Old Password"}
                  id={"old_pass"}
                  isPass={true}
                  value={""}
                  handleChange={() => {}}
                />
                <InputBox
                  type={"password"}
                  label={"New Password"}
                  id={"new_pass"}
                  isPass={true}
                  value={""}
                  handleChange={() => {}}
                />
                <InputBox
                  type={"password"}
                  label={"Confirm Password"}
                  id={"confirm_pass"}
                  isPass={true}
                  value={""}
                  handleChange={() => {}}
                />
                <Button content="Update" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
