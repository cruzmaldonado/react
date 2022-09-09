import { createSlice } from "@reduxjs/toolkit";


export const counterChange= createSlice({
    name:"card",
    initialState:true,
    reducers:{
        change: state=>(!state)
          
       
    }
})
export const {change} = counterChange.actions 
export default counterChange.reducer 