import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Login from './Login.jsx';
import Register from './Register.jsx';
import User from './User.jsx';
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
    path: '/User',
    element: <User/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
