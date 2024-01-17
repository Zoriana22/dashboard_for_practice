//node_modules
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//redux
import { useState } from "react";

export const initialState = {
  roles: [],
};

export const getUserRole = createAsyncThunk("getUserRole", async () => {
  const res = await axios.get('http://localhost:5000/api/roles');
  return res.data;
})

export const roleSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getUserRole.fulfilled, (state, action) => {
    state.currentUser = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { } = roleSlice.actions
//export const selectUsersData = (state) => state.users.value;
export default roleSlice.reducer;