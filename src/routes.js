import React from "react";
import Dashboard from "./Сomponents/Dashboard/Dashboard";
import Users from "./Сomponents/Users/Users";



let routes = [
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "users",
        element: <Users />,
    },
];

export default routes;
