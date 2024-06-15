import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Applied from './Components/Applied-Job/Applied';
import Blogs from './Components/Blogs/Blogs';
import JobsFeature from './Components/JobsFeature/JobsFeature';
import JOBsDetails from './Components/JOBsDetails/JOBsDetails';







const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },

     {
      path:"/",
      element:<JobsFeature></JobsFeature>
     },
        
      {
        path:"/Statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/Applied",
        loader:()=>fetch('JobsFeature.json'),
        element:<Applied></Applied>
      },
      {
        path:"/Blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"/job/:id",
        loader:()=>fetch('JobsFeature.json'),
        element:<JOBsDetails></JOBsDetails>
      },
      
     
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
