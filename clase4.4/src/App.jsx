import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardMovies from './assets/components/CardMovies'

function App() {
const URL="https://movies-crud-academlo.herokuapp.com/movies/"

  const [movies, setMovies] = useState()

const getAllMovies=()=>{
  axios.get(URL)
    .then(res=>setMovies(res.data))
    .catch(err=>console.log(err.response.data))

}
useEffect(()=>{
  getAllMovies()
},[])

console.log(movies)


  return (


    <div className="App">
      <h1>Movies CRUD</h1>

      <div className='card-container'>
        {
          movies?.map(movie=>(

            <CardMovies  
            key={movie.id}
            movie={movie}/>
          ))
        }
      </div>

      
    </div>
  )
}

export default App
