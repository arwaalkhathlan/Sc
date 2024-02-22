// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MyCourses from './pages/myCourses';
import AddedCourse from './pages/addedCourse';
import ReviewProject from './pages/reviewProject';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/myCourses",
    element: <MyCourses/>,
  },
  {
    path: "/addedCourse",
    element: <AddedCourse/>,
  },
  {
    path: "/reviewProject",
    element: <ReviewProject/>,
  },
]);

ReactDOM.render(
<RouterProvider router={router}/>,
  document.getElementById('root')
);
