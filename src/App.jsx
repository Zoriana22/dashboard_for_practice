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
      element: <div><MainPage /></div>,
    },
    {
      path: "users",
      element: <div><SecondPage /></div>,
    },
  ]);
  return element;
}

export default App;

const MainPage = () => {
  return (
    <div className={styles.app_wrapper}><Admin_Sidebar />

      <div className={styles.topbar}><Topbar /></div>
      <div className={styles.app_wrapper_content}><Dashboard /></div>

    </div>
  );
}

const SecondPage = () => {
  return (
    <div className={styles.app_wrapper}><Admin_Sidebar />

      <div className={styles.topbar}><Topbar /></div>
      <div className={styles.app_wrapper_content}><Users /></div>

    </div>
  );
}



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div><Dashboard /></div>,
//   },
//   {
//     path: "/users",
//     element: <div><Users /></div>,
//   }
// ]);

// children: [
//   {
//     path: "/",
//     element: <div className={styles.topbar}><Topbar /></div>,
//   },
//   { path: "/",
//   element: <div className={styles.app_wrapper_content}><Dashboard /></div> },
// ],