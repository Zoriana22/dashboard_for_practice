//node_modules
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    return res.data;
})

export const getOneUser = createAsyncThunk("getOneUser", async () => {
    const res = await axios.get('http://localhost:5000/api/users/' +`${uid}`);
    console.log(res.data);
    return res.data;
})

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    },
    getOneUser: (builder) => {
        builder.addCase(getOneUser.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});


// Action creators are generated for each case reducer function
export const { } = userSlice.actions
//export const selectUsersData = (state) => state.users.value;
export default userSlice.reducer;