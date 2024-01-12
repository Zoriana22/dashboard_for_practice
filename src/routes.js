import React from "react";
import Dashboard from "./Сomponents/Dashboard/Dashboard";
import Users from "./Сomponents/Users/Users";
import EditUser from "./Сomponents/EditUser/EditUser";



let routes = [
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "users",
        element: <Users />,
    },
    {
        path: "users/id",
        element: <EditUser />,
    },
];

export default routes;
