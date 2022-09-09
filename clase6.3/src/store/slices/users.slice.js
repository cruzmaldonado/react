import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice= createSlice({
    name:"users",
    initialState:null,
    reducers:{
        setUsersGlobal:(state,action)=>action.payload
    }

})
export const  {setUsersGlobal} = usersSlice.actions

export const getUsers=()=>(dispatch)=>(
    axios.get("https://randomuser.me/api/?results=20")
    .then(res=>dispatch(setUsersGlobal(res.data)))
    .catch(err=>console.log(err))
    )
export default   usersSlice.reducer