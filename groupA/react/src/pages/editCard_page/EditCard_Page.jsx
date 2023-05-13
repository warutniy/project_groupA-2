import { React, useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import EditCard from '../../components/editCard/EditCard';
import { getUser } from "../../api/users.ts";

const EditCard_Page = function() {

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
            <EditCard />
        </Layout>
    );
};

export default EditCard_Page;