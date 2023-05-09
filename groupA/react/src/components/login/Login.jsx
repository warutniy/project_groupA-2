import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import '../login/login.css';
import { getUser, loginUser } from "../../api/users.ts";

const Login = function() {

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
            <div className="wrapper login">
                <span className="icon-close">
                    <a href='/'><ion-icon name="close"></ion-icon></a>
                </span>

                <div className="form-box login">
                    <h2>Login</h2>
                    <form onSubmit={login} >
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" /> Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn" >Login</button>
                        <div className="login-register">
                            <p>Don't have an account? <a href="/register" className="register-link" >Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
