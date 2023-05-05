import React from "react";
import LayoutUser from "./Layout_User";
import './assets/style/CreateEdit_Card.css';

const EditCard = function() {
    return (
        <LayoutUser>
            <div className="wrapper create_card">
                <span className="icon-close">
                    <a href='/'><ion-icon name="close"></ion-icon></a>
                </span>

                <div className="form-box"> {/*container*/}
                    <div className="title">EDIT AN ACTIVITY CARD</div>
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
                                    <option value="run" >Run</option>
                                    <option value="bicycle_ride" >Bicycle Ride</option>
                                    <option value="swim" >Swim</option>
                                    <option value="walk" >Walk</option>
                                    <option value="hike" >Hike</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Distance (km)</span>
                                <input type="text" placeholder="Enter your distance" required />
                            </div>
                        </div>
                        <button type="submit" className="btn" >Edit Card</button>
                    </form>
                </div>
            </div>
        </LayoutUser>
    );
};

export default EditCard;