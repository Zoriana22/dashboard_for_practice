//node_modules
import React from "react";
//redux
import { useState } from "react";
//styles
import styles from "./EditUser.module.css";

const EditUser = (props) => {
  const [name, surname, role, phoneNumber, email] = useState("");
  
  return (
    <>
      <h2>Edit Users</h2>
      
        <div className={styles.edit_inputs}>
          <label className={styles.edit_input_item} >
            <input name="name" className={styles.edit_input_item} />
          </label>

          <label className={styles.edit_input_item} >
            <input name="surname" className={styles.edit_input_item} />
          </label>

          <label className={styles.edit_input_item} >
            <input name="role" className={styles.edit_input_item} />
          </label>

          <label className={styles.edit_input_item} >
            <input name="phoneNumber" className={styles.edit_input_item} />
          </label>

          <label className={styles.edit_input_item} >
            <input name="email" className={styles.edit_input_item} />
          </label>
        </div>
      
    </>
  );
};

export default EditUser;
