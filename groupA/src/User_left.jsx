import React, { useState } from "react";
import "./User_main.css";
import Layout from "./Layout";

// Import the Font Awesome CSS file
// npm install --save @fortawesome/fontawesome-free
// "dependencies" => "@fortawesome/fontawesome-free": "^6.4.0",
import '@fortawesome/fontawesome-free/css/all.min.css';

const User_left = function () {

  // add useState
  const [profilePic, setProfilePic] = useState("./src/assets/icon/man.png");

  // add handleProfilePicChange
  const handleProfilePicChange = (event) => {
    setProfilePic(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="grid-left">
      <div className="profile_pic">
        <a href="#">
          <img src={profilePic} alt="pic_man" />
          <label htmlFor="profile_pic_upload" title="Upload Image">
            <i className="fas fa-upload"></i>
          </label>
        </a>
        <input
          type="file"
          id="profile_pic_upload"
          accept="image/*"
          onChange={handleProfilePicChange}
          style={{ display: "none" }}
        />
      </div>

      <p className="name_user">Fullname Lastname</p>
      <p className="info_user">Age: 23<br/> Weight: 60 kg<br/> Height: 178 cm</p> 
      <p className="stat_user">Goals & Stats</p>
      <div className="goals_user">
        <div className="activity_icons">
          <img src="../src/assets/icon/walk.png" />
          <p>Distance : 10 km</p>
        </div>
        <div className="activity_icons">
          <img src="../src/assets/icon/swim.png" />
          <p>Distance : 10 km</p>
        </div>
        <div className="activity_icons">
          <img src="../src/assets/icon/run.png" />
          <p>Distance : 10 km</p>
        </div>
        <div className="activity_icons">
          <img src="../src/assets/icon/bike.png" />
          <p>Distance : 25 km</p>
        </div>
        <div className="activity_icons">
          <img src="../src/assets/icon/badminton.png" />
          <p>Duration : 1.30 hours</p>
        </div>
      </div>
    </div>
  );
};

export default User_left;
