import React from 'react';
import Layout from './Layout';
import './Login_Register.css';

const Login = function() {
  return (
    <Layout>
      <div className="wrapper">
        <span className="icon-close">
            <a href='/'><ion-icon name="close"></ion-icon></a>
        </span>

        <div className="form-box login">
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" required />
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
