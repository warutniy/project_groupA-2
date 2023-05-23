import React, { useState, useEffect, useContext } from 'react';
import Layout from "../../components/layout/Layout";
import CreateCard from '../../components/createCard/CreateCard';
import Cookies from 'js-cookie';
import { ActivityContext } from '../../contexts/ActivityContext';

const CreateCard_Page = function() {

    const token = Cookies.get('TOKEN');

    const { createCard } = useContext(ActivityContext);

    const [activityName, setActivityName] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();
    const [startTime, setStartTime] = useState();
    const [finishTime, setFinishTime] = useState();
    const [activityType, setActivityType] = useState();
    const [distance, setDistance] = useState();

    const handleChangeActivityName = (event) => {
        setActivityName(event.target.value);
    }

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleChangeStartTime = (event) => {
        setStartTime(event.target.value);
    }

    const handleChangeFinishTime = (event) => {
        setFinishTime(event.target.value);
    }

    const handleChangeActivityType = (event) => {
        setActivityType(event.target.value);
    }

    const handleChangeDistance = (event) => {
        setDistance(event.target.value);
    }

    const submitCreateCard = async (event) => {
        event.preventDefault(); 

        try {
            const userCreateCard = {
                activityName,
                date,
                description,
                startTime,
                finishTime,
                activityType,
                distance,
            };
            await createCard(userCreateCard);
            event.target.reset();
        } catch(error) {
            console.log(error);
        };
    };

    return (
        <Layout token={token} >
            <CreateCard 
                onSubmitCreateCard={submitCreateCard}
                onChangeActivityName={handleChangeActivityName}
                onChangeDate={handleChangeDate}
                onChangeDescription={handleChangeDescription}
                onChangeStartTime={handleChangeStartTime}
                onChangeFinishTime={handleChangeFinishTime}
                onChangeActivityType={handleChangeActivityType}
                onChangeDistance={handleChangeDistance}
            />
        </Layout>
    );
};

export default CreateCard_Page;