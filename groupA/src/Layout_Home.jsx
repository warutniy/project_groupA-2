import React from 'react';
import NavbarHome from './Navbar_Home';

const LayoutHome = function({ children }) {
    return (
        <div>
            <NavbarHome />
            {children}
        </div>
    );
};

export default LayoutHome;