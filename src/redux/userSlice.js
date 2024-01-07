import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'



export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        getAllUsers: (state, action) => {
            axios.get('http://localhost:5000/api/users').then((response) => {
                return response.data
            });
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, getAllUsers } = userSlice.actions

export default userSlice.reducer