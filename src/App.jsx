import React from "react";
import styles from "./App.module.css";
import Admin_Sidebar from "./Сomponents/Admin_Sidebar/Admin_Sidebar";
import Topbar from "./Сomponents/Topbar/Topbar";
import Dashboard from "./Сomponents/Dashboard/Dashboard";
import Users from "./Сomponents/Users/Users";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <div><Dashboard /></div>,
    },
    {
      path: "users",
      element: <div><Users /></div>,
    },
  ]);

  return (
    <div className={styles.app_wrapper}><Admin_Sidebar />

      <div className={styles.topbar}><Topbar /></div>
      <div className={styles.app_wrapper_content}> {element} </div>

    </div>
  );
}

export default App;


