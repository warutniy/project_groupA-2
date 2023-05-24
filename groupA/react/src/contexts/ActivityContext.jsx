import { createContext, useContext, useEffect, useState } from 'react';
import * as ActivityAPI from '../api/activities';
import Cookies from 'js-cookie';

export const ActivityContext = createContext();

function ActivityContextProvider({ children }) {

    const [currentCard, setCurrentCard] = useState([]);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const response = await ActivityAPI.getCard();
                const fetchedActivity = response.data.user;

                // set current user
                if (fetchedActivity) {
                    setCurrentCard(fetchedActivity);
                };
             
            } catch (error) {
                console.log(error);
            };
        };

        const token = Cookies.get('TOKEN');
        if (token) {
            fetchActivity();
        };
    }, []);

    // Activity Card
    const createCard = async (body) => {

        try {
            const response = await ActivityAPI.create_card(body);
            console.log(response);

            alert(response.data.message);
            location.href = '/dashboard';
            
        } catch (error) {
            console.log(error);
            alert('Create Activity Card Failed!');
        };
    };

    const handlers = {
        currentCard,
        createCard
    };
    
    return (
        <ActivityContext.Provider value={handlers}>
            {children}
        </ActivityContext.Provider>
    );  
};

export default ActivityContextProvider;