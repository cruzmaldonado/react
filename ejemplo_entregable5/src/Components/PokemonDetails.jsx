import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from "axios"
const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()
  useEffect(() => {
    const URL=`https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
    .then(res=>setPokeInfo(res.data))
    .catch(err=>console.log(err))
  }, [])
   

  const {name}=useParams()

  return (

    <article>
      <img src={pokeInfo?.sprites.other["official-artwork"].front_default} alt="" />
      <h1>{name}</h1>
    </article>
  
    )
}

export default PokemonDetails