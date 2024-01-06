import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Сomponents/Dashboard/Dashboard";
import Users from "./Сomponents/Users/Users";
import { useRoutes } from "react-router-dom";


let element = useRoutes([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "users",
        element: <Users />,
    },
]);

export default element;
