
import React, { useState } from "react";
import './TryChart.css'
import Layout from "./Layout";
import User_left from "./user_left"; 
import ActivityCard from "./ActivityCard";
import './ActivityCard.css';


const Chart = function() {
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

export default Chart
