import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ColorChage2 from './components/ColorChage2'
import ColorChage1 from './components/ColorChage1'
import Button from './components/Button'
import ButtonAll from './components/ButtonAll'

function App() {

  const [colorCambio, setColorCambio] = useState(false)
  let valor=""
  if (colorCambio)
  valor="on"
  else
  valor="off "
  
    
    const handleChage=()=>setColorCambio(!colorCambio)

  return (
    <>
    <div className="App">
      <div className='container'>
        {colorCambio? <ColorChage1/>:<ColorChage2/>}
        <button onClick={handleChage}>{valor}</button>
      </div>
    </div>

    <Button />
    <Button />
    <Button /> 
  
      <ButtonAll onOff={colorCambio} handle={handleChage}/>
      <ButtonAll onOff={colorCambio} handle={handleChage}/>
      <ButtonAll onOff={colorCambio} handle={handleChage}/>
    
    
    
    



    </>
  )
}

export default App
