//node_modules
import React, { useEffect } from "react";
//redux
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, getOneUser } from "../../redux/userSlice";
//styles
import styles from "./EditUser.module.css";

const EditUser = (props) => {
  const [name, surname, role, phoneNumber, email] = useState("");

  const getUserValue = useSelector((state) => state.users.id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneUser());
  }, []);

  return (
    <>
      <h2>Edit Users</h2>

      <div className={styles.edit_inputs}>
        {getUserValue &&
          getUserValue.map((userValue) => {
            return (
              <>
                <label className={styles.edit_label_item}>
                  <input
                    name="name"
                    placeholder="name"
                    className={styles.edit_input_item}
                  >
                    {userValue.name}
                  </input>
                </label>

                <label className={styles.edit_label_item}>
                  <input
                    name="surname"
                    placeholder="surname"
                    className={styles.edit_input_item}
                  >
                    {userValue.surname}
                  </input>
                </label>

                <label className={styles.edit_label_item}>
                  <select
                    name="selectrole"
                    defaultValue="some role"
                    className={styles.edit_select_item}
                  >
                    <option
                      className={styles.edit_option_item}
                      value="someOption"
                    >
                      some role
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
                  >
                    {userValue.phone}
                  </input>
                </label>

                <label className={styles.edit_label_item}>
                  <input
                    name="email"
                    placeholder="email"
                    className={styles.edit_input_item}
                  >
                    {userValue.email}
                  </input>
                </label>
              </>
            );
          })}
      </div>
    </>
  );
};

export default EditUser;
