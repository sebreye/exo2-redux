import { createSlice } from "@reduxjs/toolkit";
let initialForm = []
export const form = createSlice({
    name: 'form',
    initialState: initialForm , 
    reducers: {
        addForm: (state, action) => {
            state.push(action.payload)
        }
    }
})
export const {addForm} = form.actions
export default form.reducer