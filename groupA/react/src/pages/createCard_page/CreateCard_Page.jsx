import { React, useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import CreateCard from '../../components/createCard/CreateCard';
import { getUser } from "../../api/users.ts";

const CreateCard_Page = function() {

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
            <CreateCard />
        </Layout>
    );
};

export default CreateCard_Page;