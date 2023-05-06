import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Login from './Login.jsx';
import Register from './Register.jsx';
import User_main from './User_main.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ActivityCard from './ActivityCard';

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

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
