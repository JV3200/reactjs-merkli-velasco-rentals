import React from "react";
import Home from "./pages/Home";
import Storefronts from "./pages/Storefronts";
import OfficeStudios from "./pages/OfficeStudios";
import LoginRegister from "./pages/LoginRegister";
import { createRoot } from "react-dom/client";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
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
      },
      {
        path: "loginRegister",
        element: <LoginRegister />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
