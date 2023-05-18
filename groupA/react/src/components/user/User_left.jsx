import React from "react";
import "../user/User_main.css";
import manImage from '../../assets/icon/man.png';
import walkImage from '../../assets/icon/walk.png';
import swimImage from '../../assets/icon/swim.png';
import runImage from '../../assets/icon/run.png';
import bikeImage from '../../assets/icon/bike.png';
import badmintonImage from '../../assets/icon/badminton.png';
import { useState, useEffect } from "react";
import EditProfile from "../editProfile/EditProfile";
import '@fortawesome/fontawesome-free/css/all.min.css';


// const EditUser = (prop) => {
//   return (
//     <div className='EditUserBTN'>
//       {prop.editMode ? (
//         <div>
//           <input
//             type="text"
//             value={prop.DataProfile.name}
//             onChange={prop.handleChange}
//             name="name"
//           />
//           <input
//             type="text"
//             value={prop.DataProfile.username}
//             onChange={prop.handleChange}
//             name="username"
//           />
//           <input
//             type="text"
//             value={prop.DataProfile.height}
//             onChange={prop.handleChange} 
//             name="height"
//           />
//           <input
//             type="text"
//             value={prop.DataProfile.weight}
//             onChange={prop.handleChange}
//             name="weight"
//           />
//           <input
//             type="text"
//             value={prop.DataProfile.age}
//             onChange={prop.handleChange}
//             name="age"
//           />
//         </div>
//       ) : (
//         <div>{prop.DataProfile}</div>
//       )}
//       {prop.editMode ? (
//         <button onClick={prop.handleSaveClick}>Save</button>
//       ) : (
//         <button onClick={prop.handleEditClick}>Edit</button>
//       )}
//     </div>
//   );
// };

const User_left = function (prop) {

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

      <p className="name_user">Name Name</p>
      <p className="info_user">Age: 23 Weight: 60 kg Height: 178 cm</p>
      <div className="EditUserBTN">
        <button>
          <a href="/edit_profile">Edit</a>
        </button>
      </div>
      <p className="stat_user">Goals & Stats</p>
      {/* <div className='EditUserBTN'>
        {editMode ? (
          <div>
            <input
              type="text"

            />
            <input
              type="text"

            />
            <input
              type="text"

            />
            <input
              type="text"

            />
            <input
              type="text"

            />
          </div>
        ) : (
          <div>
            <p className="name_user">{DataProfile.name}</p>
            <p className="info_user">{DataProfile.height} cm</p>
            <p className="info_user">{DataProfile.weight} kg</p>
            <p className="info_user">{DataProfile.age}</p>
          </div>
        )}
        {editMode ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div> */}
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