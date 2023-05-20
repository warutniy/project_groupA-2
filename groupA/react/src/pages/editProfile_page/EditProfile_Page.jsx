import { React, useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import EditProfile from '../../components/editProfile/EditProfile';
import Cookies from 'js-cookie';

const EditProfile_Page = function() {

    const token = Cookies.get('TOKEN');

    return (
        <Layout token={token} >
            <EditProfile />
        </Layout>
    );
};

export default EditProfile_Page;