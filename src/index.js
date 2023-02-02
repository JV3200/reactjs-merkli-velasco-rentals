import React from "react";
import Home from "./pages/Home";
import Storefronts from "./pages/Storefronts";
import OfficeStudios from "./pages/OfficeStudios";
import AirbnbStays from "./pages/AirbnbStays";
import LoginRegister from "./pages/LoginRegister";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "storefronts",
        element: <Storefronts />,
      },
      {
        path: "officeStudios",
        element: <OfficeStudios />,
      },
      {
        path: "airbnbStays",
        element: <AirbnbStays />,
      },
      {
        path: "loginRegister",
        element: <LoginRegister />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
