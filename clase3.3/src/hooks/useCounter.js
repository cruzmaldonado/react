import { useState } from 'react'

const useCounter = (initialValue=0) => {
const [counter, setCounter] = useState(initialValue)

const increment=() => {
    
    if(counter==100)
    setCounter(100)
    else
    setCounter(counter+1)

}
const decrement=() =>
{


    if (counter==0)
    setCounter(0)
    else
    setCounter(counter-1)
   

}
const reset=()=>setCounter(initialValue)

return{counter,increment ,decrement, reset}
}
export default useCounter