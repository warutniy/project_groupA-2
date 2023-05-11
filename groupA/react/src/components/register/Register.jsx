import React from 'react';
import Layout from '../layout/Layout';
import '../register/register.css';

const Register = function() {
  return (
    <Layout>
        <div className="wrapper register">
            <span className="icon-close">
                <a href='/'><ion-icon name="close"></ion-icon></a>
            </span>

            <div className="form-box register">
                <h2>Registration</h2>
                <form action="#">
                    <div className="input-box full_name">
                        <div className='first_name'>
                            <span className="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="text" required />
                            <label>First Name</label>
                        </div>
                        <div className='last_name'>
                            <span className="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="text" required />
                            <label>Last Name</label>
                        </div>
                    </div>
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
                        <label>Password <small>(at least 6 characters, including letters and numbers)</small></label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" required />
                        <label>Confirm Password</label>
                    </div>
                    <div className="agree-condition">
                        <label><input type="checkbox" /> agree to the terms & conditions</label>
                    </div>
                    <button type="submit" className="btn" >Register</button>
                    <div className="login-register">
                        <p>Already have an account? <a href="/login" className="login-link" >Login</a></p>
                    </div>
                </form>
            </div>
        </div>

    </Layout>
  );
};

export default Register;