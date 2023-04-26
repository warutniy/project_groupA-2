import React, { useState } from "react";
import "./User.css";
import Layout from "./Layout";

const User_left = function () {
  return (
    <div className="grid-left">
      <img
        src="./src/assets/icon/man.png"
        className="profile_pic"
        alt="pic_man"
      />
      <p className="name_user">Name Name</p>
      <p className="info_user">Age: 23 Weight: 60 kg Height: 178 cm</p>
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
