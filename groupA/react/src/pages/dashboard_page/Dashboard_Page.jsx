import { React, useState, useEffect, useContext } from 'react';
import Layout from "../../components/layout/Layout";
import User_left from "../../components/user/User_left"; 
import User_middle from "../../components/user/User_middle";
import User_right from '../../components/user/User_right';
import Cookies from 'js-cookie';
import { AuthenContext } from '../../contexts/UserContext';
import { ActivityContext } from '../../contexts/ActivityContext';

const Dashboard_Page = () => {

    const token = Cookies.get('TOKEN');

    const { currentUser, currentProfile } = useContext(AuthenContext);
    const { currentCard } = useContext(ActivityContext);

    return (
        <Layout token={token} >
            <div className="grid-main">
                <User_left profile={currentProfile} user={currentUser} />
                <User_middle card={currentCard} />
                <User_right />
            </div>
        </Layout>
    );
};

export default Dashboard_Page;