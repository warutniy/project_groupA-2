import { React, useState, useEffect } from 'react';
import Layout from "../layout/Layout";
import '../createCard/createCard.css';
import { getUser } from "../../api/users.ts";

const CreateCard = function() {
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
            <div className="wrapper create_card">
                <span className="icon-close">
                    <a href='/dashboard'><ion-icon name="close"></ion-icon></a>
                </span>

                <div className="form-box"> {/*container*/}
                    <div className="title">CREATE A NEW CARD</div>
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Activity Name</span>
                                <input type="text" placeholder="Enter your activity name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Activity Date</span>
                                <input className="dateTime" type="date" placeholder="" required />
                            </div>
                            <div className="input-box message">
                                <span className="details">Description</span>
                                <textarea placeholder="Put your description here!!!" rows="5"></textarea>
                            </div>
                            <div className="input-box">
                                <span className="details">Start-Time</span>
                                <input className="dateTime" type="time" placeholder="" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Finish-Time</span>
                                <input className="dateTime" type="time" placeholder="" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Activity Type</span>
                                <select className="minimal" placeholder="" required >
                                    <option value="" > Please Select Item </option>
                                    <option value="run" >Walk</option>
                                    <option value="bicycle_ride" >Swim</option>
                                    <option value="swim" >Run</option>
                                    <option value="walk" >Bike</option>
                                    <option value="hike" >Badminton</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Distance (km)</span>
                                <input type="number" placeholder="Enter your distance" required />
                            </div>
                        </div>
                        <button type="submit" className="btn" >Create Card</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default CreateCard;