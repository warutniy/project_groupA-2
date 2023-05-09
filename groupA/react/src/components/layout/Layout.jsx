import React from 'react';
import Navbar from '../nav/Navbar';

const Layout = function({ children, username }) {
    return (
        <div>
            <Navbar username={username} />
            {children}
        </div>
    );
};

export default Layout;