import React from 'react';
import '../editProfile/editProfile.css';

const EditProfile = function() {
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
                            <input type="text" placeholder="Enter your first name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" placeholder="Enter your last name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Birth Date</span>
                            <input className="dateTime" type="date" placeholder="" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Gender</span>
                            <select className="minimal" placeholder="" required >
                                <option value="" > Please Select One... </option>
                                <option value="Female" >Female</option>
                                <option value="Male" >Male</option>
                                <option value="Other" >Other</option>
                                <option value="Prefer not to Answer" >Prefer not to Answer</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <span className="details">Height (kg)</span>
                            <input type="number" placeholder="Enter your height" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Weight (kg)</span>
                            <input type="number" placeholder="Enter your weight" required />
                        </div>
                    </div>
                    <button type="submit" className="btn" >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;