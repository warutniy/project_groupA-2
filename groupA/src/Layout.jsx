import React from 'react';
import Navbar from './Navbar';

const Layout = function({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;