//node_modules
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/userSlice";
//styles
import styles from "./Users.module.css";
//icons
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";

const Users = (props) => {
  const allUsersData = useSelector((state) => state.users.allUsers);

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
            <th width="20%">Name</th>
            <th width="20%">Surname</th>
            <th width="10%">Role</th>
            <th width="20%">Phone Number</th>
            <th width="20%">Email</th>
            <th width="10%"> </th>
          </tr>
        </thead>

        <tbody>
          {allUsersData &&
            allUsersData.map((userData) => {
              return (
                <tr key={userData.id}>
                  <td> {userData.name} </td>
                  <td> {userData.surname} </td>
                  <td> {userData.role} </td>
                  <td> {userData.phone} </td>
                  <td> {userData.email} </td>
                  <td>
                    <Link to={`/users/${userData.id}`}>
                      <ModeOutlinedIcon fontSize="small" color="primary" />
                    </Link>
                    <DeleteOutlinedIcon fontSize="small" color="primary" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Users;

// notes https://ru.stackoverflow.com/questions/766525/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-%D0%BF%D0%BE-%D0%BA%D0%BE%D0%BB%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D1%83-%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-react
