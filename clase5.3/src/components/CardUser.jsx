import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrement,increment,reset } from '../store/slices/counter.slice'

const CardUser = ({change1}) => {


    const counter=useSelector(state=>state.counterSlice)

    const dispatch = useDispatch()
 
    const incrementCounter = () => dispatch(increment())
    const decrementCounter = () => dispatch(decrement())
    const resetCounter = () => dispatch(reset())
       if(change1){
    
    return (
        <div>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>increment:</button>     
      <button onClick={decrementCounter}>decrement:</button> 
      <button onClick={resetCounter}>reset:</button> 


    </div>
  )

}
else 
return <h1>Value false</h1>
}

export default CardUser