import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Login from './Login.jsx';
import Register from './Register.jsx';
import User_main from './User_main.jsx';
import Chart from './TryChart';

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

  {
    path: '/User_main',
    element: <User_main/>
  },

  {
    path: '/activity',
    element: <ActivityCard />
  },

  {path: '/TryChart',
   element: <Chart />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
