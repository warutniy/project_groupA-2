import React from 'react';
import NavbarUser from './Navbar_User';

const LayoutUser = function({ children }) {
    return (
        <div>
            <NavbarUser />
            {children}
        </div>
    );
};

export default LayoutUser;