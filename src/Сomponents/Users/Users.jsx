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
                    {putUserValue ?
                        putUserValue.map((userValue) => {
                            return (
                                <tr>
                                    <td key={userValue.id}>test</td>
                                    <td key={userValue.id}><span>  </span></td>
                                    <td key={userValue.id}><span> {userValue.id} </span></td>
                                    <td key={userValue.id}><span> {userValue.id} </span></td>
                                    <td key={userValue.id}><span> {userValue.id} </span></td>
                                    <td key={userValue.id}><span> {userValue.id} </span></td>
                                    <td key={userValue.id}><span> {userValue.id} </span></td>
                                </tr>
                            ) 
                        : (<tr>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                        </tr>)
                    })
                    }

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


// notes https://ru.stackoverflow.com/questions/766525/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-%D0%BF%D0%BE-%D0%BA%D0%BE%D0%BB%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D1%83-%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-react