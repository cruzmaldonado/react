import { useEffect, useState } from 'react'
import './App.css'
import colors from './util/colors'

function App() {
 
  const [hiddenPassword, setHiddenPassword] = useState(true)
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("#fff")


  const randomColor=arr=>{
    let random=Math.floor(Math.random()*arr.length)
    return arr[random]
  }


  let cambio=hiddenPassword? "text":"password"
  let hidden=hiddenPassword ?"ocultar":"mostrar"

  const passwordHidden=()=>{
    setHiddenPassword(!hiddenPassword)
  }

  const countPlus=()=> {
    setCount(count+1)
  }

  const countLess=()=> {
    setCount(count-1)
  }
  const getReset=()=>{
    
    setCount(0)

  }

  useEffect(()=>{
    let valor= randomColor(colors)
    setColor(valor)
  },[count])


  return (
    <div style={{backgroundColor:`${color}`}} className="App">
      <h1>hola</h1>

      <label htmlFor="">contraseña</label>
      <input type={cambio} />
      <button onClick={passwordHidden}>{hidden} password </button>
      <hr />

      <h2>Contador</h2>
      <h2>{count}</h2>
      <button onClick={countLess}>decremento</button>
      <button onClick={getReset}>reset</button>
      <button onClick={countPlus}>incremento</button>





    </div>
  )
}

export default App
