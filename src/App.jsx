import React from "react";
import ReactDOM from 'react-dom/client'
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Admin_Navbar from "./components/Admin_Navbar/Admin_Navbar";
import Admin_wrapper_content from "./components/Admin_wrapper_content/Admin_wrapper_content";
//className={styles.test}


const App = () => {

  return (
    //<BrowserRouter>
    <div className={styles.app_wrapper}>
      <h1>hello</h1>
      <Admin_Navbar />
      <Admin_wrapper_content />


    </div>
    //</BrowserRouter>
  );
}


export default App;


//<Routes>
//<Route path='/admin' element={<Admin_Navbar />} />
//<Route path='/admin-content' element={<Admin_wrapper_content />} />
//</Routes>