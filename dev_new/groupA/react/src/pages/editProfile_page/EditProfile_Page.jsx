import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layout/Layout';
import EditProfile from '../../components/editProfile/EditProfile';
import Cookies from 'js-cookie';
import { AuthenContext } from '../../contexts/UserContext';

const EditProfile_Page = function() {

    const token = Cookies.get('TOKEN');

    const { currentUser, createProfile } = useContext(AuthenContext);

    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleChangeBirthDate = (event) => {
        setBirthDate(event.target.value);
    }

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    const handleChangeHeight = function(event) {
        setHeight(event.target.value);
    };

    const handleChangeWeight = function(event) {
        setWeight(event.target.value);
    };

    const submitCreateProfile = async (event) => {
        event.preventDefault(); 

        try {
            const userCreateProfile = {
                birthDate,
                gender,
                height,
                weight
            };
            await createProfile(userCreateProfile);
            event.target.reset();
        } catch(error) {
            console.log(error);
        };
    };
    

    return (
        <Layout token={token} >
            <EditProfile
                onSubmitCreateProfile={submitCreateProfile}
                onChangeBirthDate={handleChangeBirthDate}
                onChangeGender={handleChangeGender}
                onChangeHeight={handleChangeHeight}
                onChangeWeight={handleChangeWeight}
                user={currentUser}
            />
        </Layout>
    );
};

export default EditProfile_Page;