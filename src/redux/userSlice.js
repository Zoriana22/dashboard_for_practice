//node_modules
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//redux
import { useState } from "react";

export const initialState = {
    allUsers: [],
    currentUser: null,
    roles: [],
};

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    return res.data;
})

export const getOneUser = createAsyncThunk("getOneUser", async (id) => {
    const res = await axios.get('http://localhost:5000/api/users/' + `${id}`);
    //console.log(res.data);
    return res.data;
})

export const getUserRole = createAsyncThunk("getUserRole", async () => {
    const res = await axios.get('http://localhost:5000/api/roles');
    return res.data;
})

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.allUsers = action.payload;
        });
        builder.addCase(getOneUser.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
        builder.addCase(getUserRole.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
    },
});


// Action creators are generated for each case reducer function
export const { } = userSlice.actions
//export const selectUsersData = (state) => state.users.value;
export default userSlice.reducer;