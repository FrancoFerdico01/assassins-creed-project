import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./Routes/HomePage/HomePage";
import ErrorPage from "./Routes/ErrorPage/ErrorPage";
import GamesDetails from "./Routes/GamesDetails/GamesDetails";
import AboutMe from "./Routes/AboutMe/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
 
  { path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/games-details/:id",
    element: <GamesDetails />,
  },
  {
    path: "/AboutMe",
    element: <AboutMe />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
