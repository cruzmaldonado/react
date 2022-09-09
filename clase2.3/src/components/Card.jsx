import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Card = ({countries}) => {
  const [countrie, setCountrie] = useState({})

  useEffect(() => {
    let url=  `https://restcountries.com/v2/name/${countries}`
    axios.get(url)
    .then(res=>setCountrie(res.data[0]))
    .catch(err=>console.log(err))  
    
  }, [])

  return (
    <div>
    <img style ={{width:"100px"}} src={countrie.flag} alt="" />
      <h2>name:{countrie.name}</h2>
      <h2>Zona horaria:{countrie.timezones}</h2>
      <h2>capital:{countrie.capital}</h2>
      <h2>population:{countrie.population}</h2>
      <h2>language native:{countrie.languages?.[0].nativeName}</h2>
      <hr/>
    </div>

  )
}

export default Card