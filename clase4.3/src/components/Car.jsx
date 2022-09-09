import axios from 'axios'
import React from 'react'

const Car = ({car, getAllCars, setUpdateInfo}) => {

  const deleteCarById = id => {
    const URL = `https://cars-crud.herokuapp.com/cars/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllCars()
      })
      .catch(err => console.log(err))
  }

  const getInfoUpdate = () => {
    setUpdateInfo(car)
  }

  return (
    <article className='card'>
      <h2>{`#${car.id} ${car.brand} ${car.model} ${car.color}`}</h2>
      <h3>Price: <span>{car.price}</span></h3>
      <button 
        onClick={() => deleteCarById(car.id)}
        className='btn-delete'
      >Delete this Car</button>
      <button
        className='btn-delete'
        onClick={getInfoUpdate}  
      >Update Info</button>
    </article>
  )
}

export default Car