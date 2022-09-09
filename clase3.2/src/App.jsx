import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import CardCountry from './components/CardCountry'

function App() {
  

  //https://restcountries.com/v3.1/lang/spa
  const [countries, setCountries] = useState()
  useEffect(()=>{
    const URL="https://restcountries.com/v3.1/lang/spa"
    axios.get(URL)
    .then(res=> setCountries(res.data))
    .catch(err=>console.log(err))

  },[])

  console.log(countries)
  return (
    <div className="App">
      {
        countries?.map(country=>(
        <CardCountry
        key={`${country.area}-${country.population}-${country.name.official}`}
        country={country}
      
        />))

      }
    </div>
  )
}

export default App
