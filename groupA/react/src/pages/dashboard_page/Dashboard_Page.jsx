import { React, useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import User_left from "../../components/user/User_left"; 
import User_middle from "../../components/user/User_middle";
import User_right from '../../components/user/User_right';
import Cookies from 'js-cookie';

const Dashboard_Page = () => {

    const token = Cookies.get('TOKEN');

    return (
        <Layout token={token} >
            <div className="grid-main">
                <User_left />
                <User_middle />
                <User_right />
            </div>
        </Layout>
    );
};

export default Dashboard_Page;