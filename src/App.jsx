import React from "react";
import ReactDOM from 'react-dom/client'
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Admin_Sidebar from "./Сomponents/Admin_Sidebar/Admin_Sidebar";
import Admin_wrapper_content from "./Сomponents/Admin_wrapper_content/Admin_wrapper_content";
//className={styles.test}
import Topbar from "./Сomponents/Topbar/Topbar";

const App = () => {

  return (
    //<BrowserRouter>
    <div className={styles.app_wrapper}>

      <Admin_Sidebar />

      <div className={styles.topbar}>
        <Topbar />
      </div>

      <div className={styles.app_wrapper_content}>
        <Admin_wrapper_content />
      </div>

    </div>
    //</BrowserRouter>
  );
}


export default App;


//<Routes>
//<Route path='/admin' element={<Admin_Navbar />} />
//<Route path='/admin-content' element={<Admin_wrapper_content />} />
//</Routes>