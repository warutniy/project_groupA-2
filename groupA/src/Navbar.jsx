import React, { useState } from "react";
import './Navbar.css';
import Logo from './assets/FITBOOK.png';
import User from "./user";

const toggles = [
    {
        id:"menu", 
        tag:<ion-icon name="menu-outline"></ion-icon>
    }, 
    
    {
        id:"close", 
        tag:<ion-icon name="close-outline"></ion-icon>
    }];

const Navbar = function() {


const [toggle, setToggle] = useState([{id:"menu", tag:<ion-icon name="menu-outline"></ion-icon>}]);
    
    const handleClick = function() {
        document.getElementById("nav_menu").classList.toggle("active");
        setToggle((prev) => {
            return toggles.filter(item => item.id !== prev[0].id)
        });
    };

    return (
        <nav>
            <img className="logo" src={Logo} alt="FITBOOK" />
            <ul className="navigation" id="nav_menu">
                <li><a className="active_menu" href="/" >Home</a></li>
                <li><a href="#" >About</a></li>
                <li><a href="#" >Services</a></li>
                <li><a href="#" >Contact</a></li>
                <li><a href="/User" >User</a></li>
                <li><button className="btnLogin-popup"><a href="/login">Login</a></button></li>
            </ul>
            <div className="toggle_btn" onClick={handleClick} id="toggle_btn">
                {toggle[0].tag}
            </div>
        </nav>
    );
};

export default Navbar;