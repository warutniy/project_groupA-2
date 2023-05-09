import React, { useState } from "react";
import './User_main.css'
import Layout from "./Layout";
import User_left from "./user_left.jsx"; 
import ActivityCard from "./ActivityCard";
import './ActivityCard.css';


const User_main = function() {
    return (
        <Layout>
            <div className="grid-main">
                <User_left/>
                <div className="grid-right">
                    <div className="activity_card">
                        <ActivityCard />
                    </div>
                    <div className="activity_card">
                        <ActivityCard />
                    </div>
                    <div className="activity_card">
                        <ActivityCard />
                    </div>
                    <div className="activity_card">
                        <ActivityCard />
                    </div>
                    <div className="activity_card">
                        <ActivityCard />
                    </div>
                    <div className="activity_card">
                        <ActivityCard />
                    </div>
                    <div className="activity_card">
                        <ActivityCard />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default User_main
