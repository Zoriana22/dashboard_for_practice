//node_modules
import React, { useEffect, useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getOneUser } from "../../redux/userSlice";
import { getRoles } from "../../redux/roleSlice";
import { useParams } from "react-router-dom";
//styles
import styles from "./EditUser.module.css";

const EditUser = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  let { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneUser(id));
  }, []);

  const dispatchRoles = useDispatch();
  useEffect(() => {
    dispatch(getRoles());
  }, [roles]);

  const getUserData = useSelector((state) => state.users.currentUser);
  const roles = useSelector((state) => state.allRoles);

  useEffect(() => {
    if (getUserData !== null) {
      setName(getUserData.name);
      setSurname(getUserData.surname);
      setPhone(getUserData.phone);
      setEmail(getUserData.email);
    }
  }, [getUserData]);

    const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeSurname = (event) => {
    setSurname(event.target.value);
  };
  /*const handleChangeRole = (event) => {
    setRole(event.target.value);
  };*/
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

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
              onChange={handleChangeName}
              value={name}
            />
          </label>

          <label className={styles.edit_label_item}>
            <input
              name="surname"
              placeholder="surname"
              className={styles.edit_input_item}
              onChange={handleChangeSurname}
              value={surname}
            />
          </label>

          <label className={styles.edit_label_item}>
            <select
              name="role"
              defaultValue="roles"
              className={styles.edit_select_item}
            >
              {/*onChange={handleChangeRole}*/}

              {roles &&
                roles.map((role) => {
                  return (
                    <option
                      key={role.id}
                      className={styles.edit_option_item}
                      value="otherOption"
                    >
                      {role.name}
                    </option>
                  );
              })}
            </select>
          </label>

          <label className={styles.edit_label_item}>
            <input
              name="phoneNumber"
              placeholder="phoneNumber"
              className={styles.edit_input_item}
              onChange={handleChangePhone}
              value={phone}
            />
          </label>

          <label className={styles.edit_label_item}>
            <input
              name="email"
              placeholder="email"
              className={styles.edit_input_item}
              onChange={handleChangeEmail}
              value={email}
            />
          </label>
        </>
      </div>
    </>
  );
};

export default EditUser;
