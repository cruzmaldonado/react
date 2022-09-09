import React, { useState } from 'react'

const Button = (colorCambio) => {
   const [cambio, setcambio] = useState(true)

let valor=""
  if (cambio)
  valor="on"
  else
  valor="off"

  const cambiarColor =()=>{
    setcambio(!cambio)
  }

 
  return (
    <div className='container'>
    <div className={`box ${valor}`}>
    </div>
    <button onClick={cambiarColor}>({valor})</button>
    </div>
        
  )
}

export default Button   