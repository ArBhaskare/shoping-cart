import { createSlice } from "@reduxjs/toolkit" ;

const slice = createSlice({
    name : "stud",
    initialState :{
       value : ["Arvind","Bhaskare","Navin","Niraj"]
    },
    reducers:{
        addName : (state,action)=>{
          state.value = [...state.value,action.payload]
        }
    }
})
export const {addName} = slice.actions;
export default slice.reducer