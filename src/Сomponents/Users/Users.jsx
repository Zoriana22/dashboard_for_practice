import React, { useEffect } from 'react';
import styles from "./Users.module.css";
import { getAllUsers } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsersData } from '../../redux/userSlice';


const Users = (props) => {
    const putUserValue = useSelector(selectUsersData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

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
export default Users;