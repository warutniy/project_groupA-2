import { React, useState, useEffect } from 'react';
import '../user/User_main.css';
import Layout from "../layout/Layout";
import User_left from "../user/User_left"; 
import ActivityCard from "../activityCard/ActivityCard";
import '../activityCard/activityCard.css';
import { getUser } from "../../api/users.ts";


const User_main = function() {
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
            <div className="grid-main">
                <User_left/>
                <div className="grid-right">
                    <div className="activity_card">
                        <button className='create_btn'><a href='/create_card'>Create Card</a></button>
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
                    <div className="activity_card">
                        <ActivityCard />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default User_main