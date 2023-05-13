import { React, useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import User_left from "../../components/user/User_left"; 
import User_middle from "../../components/user/User_middle";
import User_right from '../../components/user/User_right';
import { getUser } from "../../api/users.ts";

const Dashboard_Page = () => {
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
        <Layout username={username} >
            <div className="grid-main">
                <User_left />
                <User_middle />
                <User_right />
            </div>
        </Layout>
    );
};

export default Dashboard_Page;