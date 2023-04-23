import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Login from './Login.jsx';
import Register from './Register.jsx';
import CreateCard from './CreateCard';

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
