import { React, useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import '../editProfile/editProfile.css';
import { getUser } from "../../api/users.ts";

const EditProfile = function() {
    const [users, setUsers] = useState(null);
    const [username, setUsername] = useState(null);
  
    useEffect(() => {
        const getUsers = async () => {
            const users = await getUser();
            const username = await users.username;
            setUsers(users);
            setUsername(username);
        };

        getUsers();
    }, []);

    return (
        <Layout username={username}>
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

        </Layout>
    );
};

export default EditProfile;