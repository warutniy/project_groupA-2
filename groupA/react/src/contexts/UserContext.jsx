import { createContext, useContext, useEffect, useState } from 'react';
import * as AuthenAPI from '../api/users'; 
import Cookies from 'js-cookie';

export const AuthenContext = createContext();

function AuthenContextProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    // const [initialLoading, setInitialLoading] = useState(true);
    
    const login = async (body) => {

        try {

            const response = await AuthenAPI.login(body);
            const { user, token, message } = response.data;

            // set current user
            setCurrentUser(user);

            // set token
            // localStorage.setItem('TOKEN', token);
            Cookies.set('TOKEN', token);
            
            alert(message);
            location.href = '/'

        } catch (error) {
            console.log(error);
            alert('Login Failed!');
        };
    };


    const logout = async () => {

        // set current user
        setCurrentUser(null);

        // remove token
        Cookies.remove('TOKEN');

        alert('Logout Success!');
        location.href = '/'
    };


    const signup = async (body) => {

        try {

            const response = await AuthenAPI.signup(body);

            // set current user
            setCurrentUser(null);

            alert(response.data.message);
            location.href = '/login';

        } catch (error) {
            console.log(error);
            alert('Signup Failed!');
        };
    };
    
    const handlers = {
        currentUser,
        // initialLoading,
        login,
        logout,
        signup
    };
    
    return (
        <AuthenContext.Provider value={handlers}>
            {children}
        </AuthenContext.Provider>
    );  
};

// ### CustomHook
export const useAuth = () => useContext(AuthenContext);

export default AuthenContextProvider;