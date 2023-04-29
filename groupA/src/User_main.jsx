import React, { useState } from "react";
import './User_main.css'
import Layout from "./Layout";
import User_left from "./user_left"; 
import ActivityCard from "./ActivityCard";
import './ActivityCard.css';


const User_main = function() {
    return (
        <Layout>
            <div className="grid-main">
                <User_left/>
                <div className="grid-right">
                    <div>
                        <ActivityCard />
                    </div>
                    <div>
                        <ActivityCard />
                    </div>
                    <div>
                        <ActivityCard />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default User_main
