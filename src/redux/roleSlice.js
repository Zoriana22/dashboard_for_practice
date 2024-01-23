//node_modules
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const initialState = {
  allRoles: [],
  currentRole: null,
};

export const getRoles = createAsyncThunk("getRoles", async () => {
  const res = await axios.get('http://localhost:5000/api/roles');
  return res.data;
})

export const roleSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getRoles.fulfilled, (state, action) => {
      state.allRoles = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { } = roleSlice.actions
//export const selectUsersData = (state) => state.users.value;
export default roleSlice.reducer;