import axios from 'axios'
import React from 'react'

const Card = ({car,getAllCars,setUpdateInfo}) => {
  
 

  const deleteCardById=(id)=>{
    const URL=`https://cars-crud.herokuapp.com/cars/${id}/`
    
    axios.delete(URL)
    .then(res=>
      {
        
        console.log(res.data)
        getAllCars()

      })
    .catch(err=>console.log(err))

  } 
  const getInfoUpdate=data=>{
    setUpdateInfo(data)

  }
  return (
    <div>Card

    <ul>
        <li><span>ID: </span>{car.id}</li>
        <li><span>name: </span>{car.brand}</li>
        <li><span>color: </span>{car.color}</li>
        <li><span>Model: </span>{car.model}</li>
        <li><span>Price: </span>{car.price}</li>
        <button onClick={()=>deleteCardById(car.id)}>Delete this card:</button>
        <button onClick={()=>getInfoUpdate(data)}>update info:</button>

    </ul>


    </div>
  )
}

export default Card