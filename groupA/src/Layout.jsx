import React from 'react';
import Navbar from './Navbar_Home';

const Layout = function({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;