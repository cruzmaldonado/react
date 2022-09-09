import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slices/counter.slice";
import  changeSlice  from './slices/card.slice';


export default configureStore({

    reducer:{
        counterSlice, 
        changeSlice


    }
})