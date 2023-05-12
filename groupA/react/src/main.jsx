import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import Register from '../src/components/register/Register';
import CreateCard from '../src/components/createCard/CreateCard';
import EditCard from '../src/components/editCard/EditCard';
import User_main from '../src/components/user/User_main';
import EditProfile from '../src/components/editProfile/EditProfile';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/register',
    element: <Register />
  },

  {
    path: '/create_card',
    element: <CreateCard />
  },

  {
    path: '/edit_card',
    element: <EditCard />
  },

  {
    path: '/dashboard',
    element: <User_main />
  },

  {
    path: '/edit_profile',
    element: <EditProfile />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
