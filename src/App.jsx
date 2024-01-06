import React from "react";
import styles from "./App.module.css";
import Sidebar from "./Сomponents/Sidebar/Sidebar.jsx";
import Topbar from "./Сomponents/Topbar/Topbar";
import { useRoutes } from "react-router-dom";
import routes from "./routes.js";
import { Counter } from "./features/counter/Counter.js";



function App() {
  let element = useRoutes(routes);

  return (
    <>
      <Counter />
      <div className={styles.app_wrapper}><Sidebar />

        <div className={styles.topbar}><Topbar /></div>
        <div className={styles.app_wrapper_content}> {element} </div>

      </div>


    </>
  );
}

export default App;


