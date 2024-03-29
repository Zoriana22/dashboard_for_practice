//node_modules
import React from "react";
import { Link } from "react-router-dom";
//components
import Dashboard from "../Dashboard/Dashboard";
//styles
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={styles.admin_navbar_container}>
      <div className={styles.header_title}>
        <h2 className={styles.header_title_nik}>ADMIN</h2>
        <div className={styles.burger_menu_btn}>
          <div className={styles.burger_line}></div>
          <div className={styles.burger_line}></div>
          <div className={styles.burger_line}></div>
        </div>
      </div>

      <div className={styles.admin_ava_pict}>
        <img src="" alt="admin_ava" />
        {/* <img src={adminAva} alt="admin_ava" /> */}
        <h3 className={styles.admin_name}>Jessica Smith </h3>
        <span className={styles.admin_job_descr}>Smart Admin</span>
      </div>

      <div className={styles.dashboard_box}>
        <img src="" alt=" " />
        <span className={styles.dashboard_title}>
          <Dashboard />
        </span>
      </div>

      <>
        <h3 className={styles.admin_data_title}>Data</h3>
      </>
      <ul>
        <li className={styles.data_item}>
          <img src="" alt=" " />
          <Link to={`/users`}>
            <span className={styles.admin_data_title}>Users </span>
          </Link>
        </li>
        <li className={styles.data_item}>
          <img src="" alt=" " />
          <span className={styles.data_item_title}>Contacts Information</span>
        </li>
        <li className={styles.data_item}>
          <img src="" alt=" " />
          <span className={styles.data_item_title}>Invoices Balances</span>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
