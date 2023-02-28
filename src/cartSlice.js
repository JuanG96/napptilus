import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        setValue: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, setValue } = cartSlice.actions

export default cartSlice.reducer