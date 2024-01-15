//node_modules
import React, { useEffect } from "react";
//redux
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneUser } from "../../redux/userSlice";
import { useParams } from "react-router-dom";
//styles
import styles from "./EditUser.module.css";

const EditUser = (props) => {
  const [name, surname, role, phoneNumber, email] = useState("");
  const putUserValue = useSelector((state) => state.users);
  const getUserValue = useSelector((state) => state.users.id);
  let { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneUser(id));
  }, []);

  return (
    <>
      <h2>Edit Users</h2>

      <div className={styles.edit_inputs}>
        {putUserValue &&
          putUserValue.map((userValue) => {
            return (
              <>
                <label className={styles.edit_label_item}>
                  <input 
                    name="name"
                    placeholder="name"
                    className={styles.edit_input_item}
                    value={userValue.name}             
                  />
                </label>

                <label className={styles.edit_label_item}>
                  <input 
                    name="surname"
                    placeholder="surname"
                    className={styles.edit_input_item}
                    value={userValue.surname}             
                  /> 
                </label>

                <label className={styles.edit_label_item}>
                  <select
                    name="selectrole"
                    defaultValue={userValue.role} 
                    className={styles.edit_select_item}
                  >
                    <option
                      className={styles.edit_option_item}
                      value={userValue.role} 
                    >
                      {userValue.role} 
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
                    value={userValue.phone}             
                  /> 
                </label>

                <label className={styles.edit_label_item}>
                  <input 
                    name="email"
                    placeholder="email"
                    className={styles.edit_input_item}
                    value={userValue.email}             
                  /> 
                </label>
              </>
            );
          })}
      </div>
    </>
  );
};

export default EditUser;
