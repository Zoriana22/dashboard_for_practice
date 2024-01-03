import React from 'react';
import ReactDOM from 'react-dom/client'
import styles from "./Admin_Navbar.module.css";

const Admin_Navbar = (props) => {
    return (
        <div>
            <>
                <h2>ADMIN</h2>
                <div className={styles.burger - menu - btn}>
                    <div className={styles.burger - line}></div>
                    <div className={styles.burger - line}></div>
                    <div className={styles.burger - line}></div>
                </div>
            </>
            <>
                <img src="" alt="admin_ava" />
                <h3 className={styles.admin_name}>Jessica Smith </h3>
                <span className={styles.admin_job_descr}>Smart Admin</span>
            </>
            <>
                <img src="" alt="icon_pict" />
                <span className={styles.dashboard_title}>Dashboard</span>
            </>
            <h3 className={styles.admin_data_title}>Data</h3>
            <ul>
                <li>
                    <img src="" alt="data_icon_pict" />
                    <span className={styles.data_item_title}>Dashboard</span>
                </li>
                <li>
                    <img src="" alt="data_icon_pict" />
                    <span className={styles.data_item_title}>Dashboard</span>
                </li>
                <li>
                    <img src="" alt="data_icon_pict" />
                    <span className={styles.data_item_title}>Dashboard</span>
                </li>
            </ul>

        </div>
    )
}
export default Admin_Navbar;
