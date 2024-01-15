//node_modules
import React, { useEffect, useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getOneUser } from "../../redux/userSlice";
import { useParams } from "react-router-dom";
//styles
import styles from "./EditUser.module.css";

const EditUser = (props) => {
  let { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneUser(id));
  }, []);

  const getUserData = useSelector((state) => state.users.currentUser);
  
  useEffect(() => {
    if (getUserData !== null) {
    setName(getUserData.name);
    setSurname(getUserData.surname);
    setRole(getUserData.role);
    setPhone(getUserData.phoneNumber);
    setEmail(getUserData.email);
  }
  }, []);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <>
      <h2>Edit Users</h2>

      <div className={styles.edit_inputs}>
        <>
          <label className={styles.edit_label_item}>
            <input
              name="name"
              placeholder="name"
              className={styles.edit_input_item}
              onChange={handleChange} 
              value={name}
            />
          </label>

          <label className={styles.edit_label_item}>
            <input
              name="surname"
              placeholder="surname"
              className={styles.edit_input_item}
              onChange={handleChange}
              value={surname}
            />
          </label>

          <label className={styles.edit_label_item}>
            <select
              name="role"
              defaultValue="someOption"
              className={styles.edit_select_item}
            >
              <option
                className={styles.edit_option_item}
                value="someOption"
              >
                other option
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
              onChange={handleChange}
              value={phoneNumber}
            />
          </label>

          <label className={styles.edit_label_item}>
            <input
              name="email"
              placeholder="email"
              className={styles.edit_input_item}
              onChange={handleChange}
              value={email}
            />
          </label>
        </>
      </div>
    </>
  );
};

export default EditUser;
