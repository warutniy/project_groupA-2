import React, { useState } from "react";
import './User.css'
import Layout from "./Layout";
import User_left from "./user_left"; 


const User = function() {
    return (
        <Layout>
            <div className="grid-main">
                <User_left/>
                <div className="grid-right">
                    <p className="activity_card">card1</p>
                    <p className="activity_card">card1</p>
                    <p className="activity_card">card1</p>
                    <p className="activity_card">card1</p>
                    <p className="activity_card">card1</p>
                    <p className="activity_card">card1</p>
                </div>
            </div>
        </Layout>
    )
}

export default User