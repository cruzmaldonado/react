import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'
import axios  from "axios"

function App() {
  const [location, setLocation] = useState()
  const [search, setSearch] = useState("")
  useEffect(()=>{
    let randomLocation
   
   
    if(search===""){
       randomLocation=Math.floor(Math.random()*125)+1
      
    }
    else{

      randomLocation=search
      
    }
    
   const URL=`https://rickandmortyapi.com/api/location/${randomLocation}`
    axios.get(URL)
    .then(res=>setLocation(res.data))
    .catch(err=>console.log(err))


  },[search])
  

  
  console.log(location);

const handleSearch=(e)=>{
  e.preventDefault()
    setSearch(e.target.search.value)
    console.log(e.target.search.value)

}

  return (
    <div className="App">
      
      <h1>Rick and Morty</h1>
      <form onSubmit={handleSearch}>
        <input type="text" id ="search"/>
        <button>search</button>
      </form>

      <LocationInfo location={location}/>
      <div>

          {


              location?.residents.map(url=>(



                <CardResident 
                key={url}
                url={url}/>
                )
              )
          }
      </div>
    </div>
  )
}

export default App
