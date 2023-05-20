import { React, useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import CreateCard from '../../components/createCard/CreateCard';
import Cookies from 'js-cookie';

const CreateCard_Page = function() {

    const token = Cookies.get('TOKEN');

    return (
        <Layout token={token} >
            <CreateCard />
        </Layout>
    );
};

export default CreateCard_Page;