import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home';
import Javascript from './pages/javascript';
import Css from './pages/css';
import Html from './pages/html';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>opps.......</h1>
  },
  {
    path: "/html",
    element: <Html />,
    errorElement: <h1>opps.......</h1>
  },  {
    path: "/css",
    element: <Css />,
    errorElement: <h1>opps.......</h1>
  },  {
    path: "/javasrcipt",
    element: <Javascript />,
    errorElement: <h1>opps.......</h1>
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

