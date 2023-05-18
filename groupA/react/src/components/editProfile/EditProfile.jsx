import React from 'react';
import '../editProfile/editProfile.css';
import { useEffect, useState } from 'react';
import Dashboard_Page from '../../pages/dashboard_page/Dashboard_Page';

const EditProfile = function () {
    const [editMode, setEditMode] = useState(false);
    const [DataArr, setDataArr] = useState([]);
    const [DataProfile, setDataProfile] = useState({
        firstname: "",
        lastname: "",
        height: "",
        weight: "",
        gender: "",
    });

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
        setDataArr([...DataArr, DataProfile])
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDataProfile({ ...DataProfile, [name]: value });
    };

    return (
        <div className="wrapper profile">
            <span className="icon-close">
                <a href='/dashboard'><ion-icon name="close"></ion-icon></a>
            </span>

            <div className="form-box profile">
                <h2>Edit Profile</h2>
                <form action="#">
                    <div className='profile-details'>
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text"
                                placeholder="Enter your first name"
                                value={DataProfile.firstname}
                                onChange={handleChange}
                                name="firstname" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text"
                                placeholder="Enter your last name"
                                value={DataProfile.lastname}
                                onChange={handleChange}
                                name="lastname" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Birth Date</span>
                            <input className="dateTime" type="date" placeholder="" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Gender</span>
                            <select className="minimal"
                                placeholder=""
                                value={DataProfile.gender}
                                onChange={handleChange}
                                name="gender" required >
                                <option value="" > Please Select One... </option>
                                <option value="Female" >Female</option>
                                <option value="Male" >Male</option>
                                <option value="Other" >Other</option>
                                <option value="Prefer not to Answer" >Prefer not to Answer</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <span className="details">Height (kg)</span>
                            <input type="number"
                                placeholder="Enter your height"
                                value={DataProfile.height}
                                onChange={handleChange}
                                name="height" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Weight (kg)</span>
                            <input type="number"
                                placeholder="Enter your weight"
                                value={DataProfile.weight}
                                onChange={handleChange}
                                name="weight" required />
                        </div>
                    </div>
                    <button type="submit" className="btn" ><a href='/dashboard'>Submit</a></button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;