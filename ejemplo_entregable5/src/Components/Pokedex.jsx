import axios from 'axios'
import React, { useState,useEffect} from 'react'
import PokemonCard from "./PokemonCard"
import { useSelector } from 'react-redux';
import { SearchInput } from './SearchInput';
import SelectType from './SelectType';


const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState("ALL")

  
  useEffect(()=>{

    
    if(optionType !=="ALL"){
      const URL=`https://pokeapi.co/api/v2/type/${optionType}/`
       axios.get(URL)
       .then(res => {
        
        const arr=res.data.pokemon.map(e=>e.pokemon)
        setPokemons({results :arr})
      })
       .catch(err => console.log(err))
    }
    else if(pokeSearch){
      const url=`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj={
         results:[{url}]
       }
       setPokemons(obj)
    }
    else{
      const  URL="https://pokeapi.co/api/v2/pokemon"
       axios.get(URL)
       .then(res => setPokemons(res.data))
       .catch(err => console.log(err))
    }

  },[pokeSearch,optionType])
  console.log(optionType)

 const nameTrainer= useSelector(state=>state.nameTrainer)
  
  return (

    <div className='pokedex'>
      <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType}/>
      <h2>welcome {nameTrainer}, catch them all</h2>
      <SelectType setPokeSearch={setPokeSearch} optionType={optionType} setOptionType={setOptionType}/>
      {
        pokemons?.results.map(pokemon=>(
          
          <PokemonCard 
          key={pokemon.url} 
          url={pokemon.url}/>
        ))}
    </div>

  )
}

export default Pokedex