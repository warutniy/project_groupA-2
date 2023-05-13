import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import Login from '../../components/login/Login';
import { getUser, loginUser } from "../../api/users.ts";

const Login_Page = function() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [users, setUsers] = useState({});
    const [username, setUsername] = useState(null);
  
    useEffect(() => {
        const getUsers = async () => {
            const users = await getUser();
            const username = await users.username;
            setUsers(users);
            setUsername(username);
            if (username) {
                location.href = "/";
            }
        };

        getUsers();
    }, []);

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const login = async () => {
        const userLogin = {
          email,
          password,
        };
        await loginUser(userLogin);
    };

    // console.log(users);
    // console.log(username);
    
    return (
        <Layout username={username} >
            <Login 
                login={login} 
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
            />
        </Layout>
    );
};

export default Login_Page;