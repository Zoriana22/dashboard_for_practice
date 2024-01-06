import React from "react";
import styles from "./App.module.css";
import Admin_Sidebar from "./Сomponents/Admin_Sidebar/Admin_Sidebar";
import Topbar from "./Сomponents/Topbar/Topbar";
import Dashboard from "./Сomponents/Dashboard/Dashboard";
import Users from "./Сomponents/Users/Users";
import { useRoutes } from "react-router-dom";
import routes from "./routes.js";

function App() {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Dashboard />,
  //   },
  //   {
  //     path: "users",
  //     element: <Users />,
  //   },
  // ]);

  return (
    <div className={styles.app_wrapper}><Admin_Sidebar />

      <div className={styles.topbar}><Topbar /></div>
      <div className={styles.app_wrapper_content}> routes </div>

    </div>
  );
}

export default App;


