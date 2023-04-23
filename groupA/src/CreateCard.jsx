import React from "react";
import Layout from "./Layout";
import './CreateCard.css';

const CreateCard = function() {
    return (
        <Layout>
            <div className="wrapper create_card">
                <span className="icon-close">
                    <a href='/'><ion-icon name="close"></ion-icon></a>
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
                                <input type="date" placeholder="" required />
                            </div>
                            <div className="input-box message">
                                <span className="details">Description</span>
                                <textarea id="message" placeholder="Put your description here!!!" rows="5"></textarea>
                            </div>
                            <div className="input-box">
                                <span className="details">Start-Time</span>
                                <input type="time" placeholder="" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Finish-Time</span>
                                <input type="time" placeholder="" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Activity Type</span>
                                <select id="select_type" placeholder="" required >
                                    <option value="" > Please Select Item </option>
                                    <option value="run" >Run</option>
                                    <option value="bicycle_ride" >Bicycle Ride</option>
                                    <option value="swim" >Swim</option>
                                    <option value="walk" >Walk</option>
                                    <option value="hike" >Hike</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Duration Time</span>
                                <input type="text" placeholder="Enter your duration time" required />
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