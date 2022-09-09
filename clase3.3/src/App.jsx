import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import useCounter from './hooks/useCounter'

function App() {
  
const {counter,increment,reset,decrement}=useCounter (0)
  return (
    <div className="App">
      <h1>class 3.3</h1>
      <h2>Counter App</h2>
      <h1>{counter}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-1</button>


      <Counter/>
    </div>
  )
}

export default App
