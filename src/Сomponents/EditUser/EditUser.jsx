//node_modules
import React, { useEffect, useState } from "react";
//redux

import { useSelector, useDispatch } from "react-redux";
import { getOneUser } from "../../redux/userSlice";
import { useParams } from "react-router-dom";
//styles
import styles from "./EditUser.module.css";

const EditUser = (props) => {
  const getUserData = useSelector((state) => state.users.currentUser);
  
  const [aboutUserData, setAboutUserData] = useState({});

  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [role, setRole] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [allUsers, setAllUsers] = useState("");
  // const [currentUser, setCurrentUser] = useState("");

  let { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneUser(id));
    getUserData = setAboutUserData;
  }, []);

  return (
    <>
      <h2>Edit Users</h2>

      <div className={styles.edit_inputs}>
        {/* {getUserData &&
          getUserData.map((userData) => {
            return ( */}
              <>
                <label className={styles.edit_label_item}>
                  <input
                    name="name"
                    placeholder="name"
                    className={styles.edit_input_item}
                    value={getUserData.name}
                  />
                </label>

                <label className={styles.edit_label_item}>
                  <input
                    name="surname"
                    placeholder="surname"
                    className={styles.edit_input_item}
                    value={getUserData.surname}
                  />
                </label>

                <label className={styles.edit_label_item}>
                  <select
                    name="selectrole"
                    defaultValue={userData.role}
                    className={styles.edit_select_item}
                  >
                    <option
                      className={styles.edit_option_item}
                      value={getUserData.role}
                    >
                      {getUserData.role}
                    </option>
                    <option
                      className={styles.edit_option_item}
                      value="someOption"
                    >
                      other option
                    </option>
                    <option
                      className={styles.edit_option_item}
                      value="otherOption"
                    >
                      other option
                    </option>
                  </select>
                </label>

                <label className={styles.edit_label_item}>
                  <input
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    className={styles.edit_input_item}
                    value={getUserData.phone}
                  />
                </label>

                <label className={styles.edit_label_item}>
                  <input
                    name="email"
                    placeholder="email"
                    className={styles.edit_input_item}
                    value={getUserData.email}
                  />
                </label>
              </>
           {/* );
          })} */}
      </div>
    </>
  );
};

export default EditUser;
