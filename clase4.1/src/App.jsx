import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios"
import Card from './components/Card'
import HookForm from './components/HookForm'

function App() {
  const [Cars, setCars] = useState()
  const [updateInfo, setUpdateInfo] = useState()  



  const createNewCard=(data)=>{
    const URL="https://cars-crud.herokuapp.com/cars/"
    
    axios.post(URL,data)
    .then(res=>getAllCars())
    .catch(err=>console.log(err))

  } 
  
  const getAllCars=()=>{
    const URL="https://cars-crud.herokuapp.com/cars/"
    axios.get(URL)
    .then(res=>setCars(res.data))
    .catch(err=>console.log(err))
  }
    useEffect(()=>{

      getAllCars()
    },[])

    
    console.log(Cars)
  return (
    <div className="App">
    
    <h1>hello world</h1>
    <HookForm 
    createNewCard={createNewCard}
    updateInfo={updateInfo}
    getAllCars={getAllCars}
    setUpdateInfo={setUpdateInfo  }/>
    <button onClick={createNewCard}>Create car</button>
    <div>
        {
          Cars?.map(car=>
            (

              <Card key={car.id} car={car}
              getAllCars={getAllCars}
              setUpdateInfo={setUpdateInfo}
              />
              ))

        }
    </div>
       
    </div>
  )
}

export default App
