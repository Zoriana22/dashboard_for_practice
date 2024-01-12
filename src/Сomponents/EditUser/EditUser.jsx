//node_modules
import React from "react";
//redux
import { useState } from "react";
//@mui for inputs
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Select } from "@mui/base/Select";
import { Option } from "@mui/base/Option";
//styles
import styles from "./EditUser.module.css";

const EditUser = (props) => {
  const [name, surname, role, phoneNumber, email] = useState("");
  return (
    <>
      <h2>Edit Users</h2>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={styles.edit_inputs}>
          <label className={styles.edit_input_item} htmlFor="">
            <TextField
              className={styles.edit_input_item}
              id="outlined-textarea"
              label="Name"
              multiline
              InputLabelProps={{
                style: {
                  color: "white",
                  borderColor: "#afacac;"
                },
              }}
            />
          </label>

          <label className={styles.edit_input_item} htmlFor="">
            <TextField
              id="outlined-textarea"
              label="Surname"
              multiline
              InputLabelProps={{
                style: {
                  color: "white",
                  borderColor: "#afacac;"
                },
              }}
            />
          </label>

          <label className={styles.edit_select} htmlFor="">
            <Select defaultValue={role} id="named-select" name="demo-select" SelectLabelProps={{
                style: {
                  width: "200px",
                  color: "white",
                  border: "2px solid lightgrey",
                },
              }}>
              <Option value={10}>Person</Option>
              <Option value={20}>User</Option>
              <Option value={30}>Client</Option>
            </Select>
          </label>

          <label className={styles.edit_input_item} htmlFor="">
            <TextField
              id="outlined-textarea"
              label="PhoneNumber"
              type="number"
              multiline
              InputLabelProps={{
                style: {
                  color: "white",
                  border: "2px solid lightgrey",
                },
              }}
            />
          </label>
        
          <label className={styles.edit_input_item} htmlFor="">
            <TextField
              id="outlined-textarea"
              label="Email"
              multiline
              InputLabelProps={{
                style: {
                  color: "white",
                  borderColor: "#afacac;"
                },
              }}
            />
          </label>
        </div>
      </Box>
    </>
  );
};

export default EditUser;
