import React, { useEffect,useState} from 'react'
import axios from 'axios'
import Stats from './Stats'
import { useNavigate } from 'react-router-dom'
import "../style/pokemonCard.css"

const pokemonCard = ({url}) => {
    const [pokemon, setPokemon] = useState()

    useEffect(()=>{
        axios.get(url)
        .then(res=>setPokemon(res.data))
        .catch(err => console.log(err))



    },[])
    const navigate=useNavigate()

    const handleClick=()=>navigate(`/pokedex/${pokemon.name}`)
    
  return (
    <article onClick={handleClick} className='card'>
        <header className={`card__header bg-${pokemon?.types[0].type.name}`}>
            <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="pokemon" />
        </header>
        <div className="body">
            <h3>{pokemon?.name}</h3>
            <ul>
            {
                pokemon?.types.map(slot=>(
                    <li key={slot.type.url}>
                        {slot.type.name}
                    </li>
                ))
            }
            </ul>
        </div>
            <footer>
                <ul>
                   { pokemon?.stats.map(stat=>(
                        <Stats
                        key={stat.stat.url}
                        infoStat={stat}
                        />
                    ))}
                </ul>   
            </footer>

    </article>
  )
}

export default pokemonCard