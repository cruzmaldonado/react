import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Car from './components/Car'
import HookForm from './components/HookForm'

function App() {
  
  const [cars, setCars] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  
  // Hacer una petición a la API de todos los carros
  const getAllCars = () => {
    const URL = 'https://cars-crud.herokuapp.com/cars/'
    axios.get(URL)
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }

  // Hacer la llamada a API en la primer renderizado 
  useEffect(() => {
    getAllCars()
  }, [])
  
  // Crear un nuevo auto en la API (CREATE)
  const createNewCar = data => {
    const URL = 'https://cars-crud.herokuapp.com/cars/'

    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllCars()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>CRUD Cars</h1>
      <HookForm 
        createNewCar={createNewCar}
        updateInfo={updateInfo}
        getAllCars={getAllCars}
        setUpdateInfo={setUpdateInfo}
      />
      <button 
        onClick={createNewCar}
      >Create Car</button>
      <div>
        {
          cars?.map(car => (
            <Car 
              key={car.id}
              car={car}
              getAllCars={getAllCars}
              setUpdateInfo={setUpdateInfo}
            />
          )
          )
        }
      </div>
    </div>
  )
}

export default App
