import React, { useState } from "react";
import '../nav/navbar.css';
import Logo from '../../assets/FITBOOK.png';

const toggles = [
    {
        id:"menu", 
        tag:<ion-icon name="menu-outline"></ion-icon>
    }, 
    
    {
        id:"close", 
        tag:<ion-icon name="close-outline"></ion-icon>
    }];

const Navbar = function({ username }) {

    const [toggle, setToggle] = useState([{id:"menu", tag:<ion-icon name="menu-outline"></ion-icon>}]);
    
    const handleClick = function() {
        document.getElementById("nav_menu").classList.toggle("active");
        setToggle((prev) => {
            return toggles.filter(item => item.id !== prev[0].id)
        });
    };

    // console.log(username);

    return (
        <nav>
            <img className="logo" src={Logo} alt="FITBOOK" />
            <ul className="navigation" id="nav_menu">
                <li><a className="active_menu" href="/" >Home</a></li>
                <li><a href="#custom-cards" >Activities</a></li>
                <li><a href="#hanging-icons" >Features</a></li>
                { username && <li><a href="/dashboard" >Dashboard</a></li> }
                {/* <li><a href="#about" >About</a></li> */}
                { !username && <li><button className="btnLogin-popup"><a href="/login">Login</a></button></li> }
                { username && <li><button className="btnSignout-popup"><a href="/signout">Signout</a></button></li> }
            </ul>
            <div className="toggle_btn" onClick={handleClick} id="toggle_btn">
                {toggle[0].tag}
            </div>
        </nav>
    );
};

export default Navbar;