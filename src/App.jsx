//node_modules
import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes.js";
//components
import Sidebar from "./Сomponents/Sidebar/Sidebar.jsx";
import Topbar from "./Сomponents/Topbar/Topbar";
//styles
import styles from "./App.module.css";

function App() {
  let element = useRoutes(routes);

  return (

    <div className={styles.app_wrapper}><Sidebar />

      <div className={styles.topbar}><Topbar /></div>
      <div className={styles.app_wrapper_content}> {element} </div>

    </div>

  );
}

export default App;


