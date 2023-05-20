import { React, useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import EditCard from '../../components/editCard/EditCard';
import Cookies from 'js-cookie';

const EditCard_Page = function() {

    const token = Cookies.get('TOKEN');
  
    return (
        <Layout token={token} >
            <EditCard />
        </Layout>
    );
};

export default EditCard_Page;