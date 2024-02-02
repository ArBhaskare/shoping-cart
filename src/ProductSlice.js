import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'prod',
    initialState:{
        value : []
    },
    reducers:{
        addData :(state,action)=>{
            state.value = action.payload
        }
    }
})
export const {addData} = slice.actions
export default slice.reducer;