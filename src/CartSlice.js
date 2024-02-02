import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const slice = createSlice({
    name : 'mycart',
    initialState : {
        value : []
    },
    reducers:{
        addItem : (state,action)=>{
            var ob = {...action.payload};
            ob.qty = 1;
            state.value = [...state.value,ob]
        },
        removeItem : (state,action)=>{
            var id = action.payload;
            state.value = state.value.filter(ob=>ob.id!=id)
        },
        incrementQty : (state,action)=>{
            var id = action.payload;
            state.value = state.value.map(ob=>ob.id==id?
                {...ob,qty:ob.qty+1}:ob)
        },
        decrementQty : (state,action)=>{
        var id = action.payload;
        state.value = state.value.map(ob=>ob.id==id && ob.qty>1?
             {...ob,qty:ob.qty-1}:ob)
       },
   }
})
export const {addItem,removeItem,incrementQty,decrementQty} = slice.actions;
export default slice.reducer;