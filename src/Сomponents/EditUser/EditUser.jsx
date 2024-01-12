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
        <div classes="edit_inputs" slotProps={{ div: { className: 'my-input-div' } }}>
          <label classes="edit_input_item" htmlFor="">
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Name"
              multiline
            />
          </label>

          <label classes="edit_input_item" htmlFor="">
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Surname"
              multiline
            />
          </label>

          <label classes="edit_select" htmlFor="">
            <Select defaultValue={role} id="named-select" name="demo-select">
              <Option value={10}>Person</Option>
              <Option value={20}>User</Option>
              <Option value={30}>Client</Option>
            </Select>
          </label>

          <label classes="edit_input_item" htmlFor="">
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="PhoneNumber"
              type="number"
              multiline
            />
          </label>

          <label classes="edit_input_item" htmlFor="">
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Email"
              multiline
            />
          </label>
        </div>
      </Box>
    </>
  );
};

export default EditUser;
