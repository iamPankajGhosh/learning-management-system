import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from "./routes/root";
import Index from "./routes/index";
import Courses from "./routes/courses";
import CourseDetails from "./routes/course-details";
import Profile from "./routes/profile";
import ErrorPage from "./routes/error-page";

import "./index.css";
import SignUp from "./routes/sign-up";
import LogIn from "./routes/log-in";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/course/:courseId" element={<CourseDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
