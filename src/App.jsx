import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import styles from "./App.module.css";
import Admin_Sidebar from "./Сomponents/Admin_Sidebar/Admin_Sidebar";
import Admin_wrapper_content from "./Сomponents/Admin_wrapper_content/Admin_wrapper_content";
import Topbar from "./Сomponents/Topbar/Topbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Admin_wrapper_content /></div>,
  },
]);

const App = () => {

  return (
    //<BrowserRouter>
    <div className={styles.app_wrapper}>

      <Admin_Sidebar />

      <div className={styles.topbar}>
        <Topbar />
      </div>

      <div className={styles.app_wrapper_content}>
        <RouterProvider router={router} />
        {/*<Admin_wrapper_content />*/}
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