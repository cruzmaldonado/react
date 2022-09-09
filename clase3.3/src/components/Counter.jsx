import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
   const {counter,reset,increment,decrement}= useCounter(10)
  return (
      <div><h1>
        Counter counter
        </h1>
        <h1>{counter}</h1>
    <button onClick={increment}>+1</button>
    <button onClick={reset}>reset</button>
    <button onClick={decrement}>-1</button>
    </div>
  )
}

export default Counter