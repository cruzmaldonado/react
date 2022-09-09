import React from 'react'
import { useDispatch } from 'react-redux/'
import { setNameTrainer } from '../store/Slices/nameTrainer.slice'
import {useNavigate} from "react-router-dom"

const Home = () => {

const dispatch=useDispatch()
const navigate= useNavigate()
const handleSubmit= (e) =>{
    e.preventDefault()
    const inputValue=e.target.name.value.trim()

    if(inputValue.length !== 0){
        dispatch(setNameTrainer(inputValue))
        navigate("/pokedex")
        console.log("estoy en home")
    }

    e.target.name.value=""
    
}

  return (
    <div>
        <h1> Hi trainer! </h1>
        <p> to Start, give me your trainer name</p>
        <form onSubmit={handleSubmit}>
            
            <input type="text" id="name" placeholder='write your name
'/>
            <button>catch them all</button>
        </form>
    </div>
  )
}

export default Home