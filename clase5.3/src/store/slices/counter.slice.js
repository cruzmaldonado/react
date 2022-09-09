import { createSlice } from "@reduxjs/toolkit";


export const counterSlice= createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment: state=>{
            return state+1;
        },
        reset: ()=>(0)
             
        ,
        decrement: state=>{
            return state-1;

    }

}
})
export const {reset,increment,decrement} = counterSlice.actions 
export default counterSlice.reducer 