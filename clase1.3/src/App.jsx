import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ImageDog from './component/ImageDog';

function App() {
  let inicial=0;
  const [isName, setIsName] = useState(true)
  const [count, setCount] = useState(inicial)
  const handlePlus=()=>{
    setCount(count+1)
  }
  const handleMinus=()=>{
    setCount(count-1)
  }
  const handleReset=()=>{
    setCount(inicial) 
  }
  const toggleState=()=> setIsName(!isName)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus}>-1</button>
      <button onClick={handleReset}>reset</button>

      <h2>estado con perrito</h2>
      <div >
      <button onClick={toggleState}>change</button>
      <br></br>
      {
      isName ? <ImageDog /> : "La imagen esta oculta"
      }
      </div>
       


    </div>
  )
}

export default App
