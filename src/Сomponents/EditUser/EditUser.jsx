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
        <label className={styles.edit_label_item}>
          <input
            name="name"
            placeholder="name"
            className={styles.edit_input_item}
          />
        </label>

        <label className={styles.edit_label_item}>
          <input 
            name="surname"
            placeholder="surname"
            className={styles.edit_input_item}
          />
        </label>

        <label className={styles.edit_label_item}>
          <select name="selectrole" defaultValue="some role" className={styles.edit_select_item}>
            <option className={styles.edit_option_item} value="someOption">some role</option>
            <option className={styles.edit_option_item} value="someOption">other option</option>
            <option className={styles.edit_option_item} value="otherOption">other option</option>
          </select>
        </label>

        <label className={styles.edit_label_item}>
          <input
            name="phoneNumber"
            placeholder="phoneNumber"
            className={styles.edit_input_item}
          />
        </label>

        <label className={styles.edit_label_item}>
          <input
            name="email"
            placeholder="email"
            className={styles.edit_input_item}
          />
        </label>
      </div>
    </>
  );
};

export default EditUser;
