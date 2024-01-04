import React from 'react';
import ReactDOM from 'react-dom/client'
import styles from "./Admin_wrapper_content.module.css";

const Admin_wrapper_content = (props) => {
    return (
        <div className={styles.admin_wrapper_content}>
            <h1>TEAM</h1>
            <p className={styles.table_title}>Managing the Team Members</p>
            <table>
                <thead>
                    <tr>
                        <th width="7%">Check</th>
                        <th width="7%">ID</th>
                        <th width="20%">Name</th>
                        <th width="8%">Age</th>
                        <th width="20%">Phone Number</th>
                        <th width="20%">Email</th>
                        <th width="13%">Acces Level</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th colspan="7" className={styles.last_line} >Rows per page</th>

                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Admin_wrapper_content;