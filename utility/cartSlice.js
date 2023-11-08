import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cartSlice',  // any name you can give
    initialState :{
      items: []
    },
    reducers :{
        addItems : (state,action)=>{state.items.push(action.payload)} ,
        removeItems : (state)=>{state.items.pop()} ,
        clearItems : (state)=>{state.items.length=0} 
    }
})

export default cartSlice.reducer;
export const {addItems,removeItems,clearItems} = cartSlice.actions;