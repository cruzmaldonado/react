import React from 'react'

const ButtonAll = ({onOff , handle}) => {

let valor="on"
  if(onOff)
  valor="on"
  else
  valor="off"

  
  

 
  return (
    <div className='container'>
    <div className={`box ${valor}`}>
    </div>
    <button onClick={handle} >[{valor}]</button>
    
    </div>
  ) 
}

export default ButtonAll