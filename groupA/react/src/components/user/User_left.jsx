import React from "react";
import "../user/User_main.css";
import manImage from '../../assets/icon/man.png';
import walkImage from '../../assets/icon/walk.png';
import swimImage from '../../assets/icon/swim.png';
import runImage from '../../assets/icon/run.png';
import bikeImage from '../../assets/icon/bike.png';
import badmintonImage from '../../assets/icon/badminton.png';

const User_left = function () {
  return (
    <div className="grid-left">
      <img
        src={manImage}
        className="profile_pic"
        alt="pic_man"
      />
      <p className="name_user">Name Name</p>
      <p className="info_user">Age: 23 Weight: 60 kg Height: 178 cm</p>
      <p className="stat_user">Goals & Stats</p>
      <div className="goals_user">
        <div className="activity_icons">
          <img src={walkImage} />
          <p>Distance : 10 km</p>
        </div>
        <div className="activity_icons">
          <img src={swimImage} />
          <p>Distance : 10 km</p>
        </div>
        <div className="activity_icons">
          <img src={runImage} />
          <p>Distance : 10 km</p>
        </div>
        <div className="activity_icons">
          <img src={bikeImage} />
          <p>Distance : 25 km</p>
        </div>
        <div className="activity_icons">
          <img src={badmintonImage} />
          <p>Duration : 1.30 hours</p>
        </div>
      </div>
    </div>
  );
};

export default User_left;