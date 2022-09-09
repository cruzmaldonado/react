import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const UsersRandom = () => {
    const [user, setUser] = useState()
  useEffect(()=>{
    const url="https://randomuser.me/api/" 
    axios.get(url)
    .then(res=>setUser(res.data.results[0]))
    .catch()

  },[])
  
  
  return (
    <div className="container">
        
    <img src={user?.picture.large} alt="" />
      <h2>{`Nombre: ${user?.name.title} ${user?.name.first} ${user?.name.last}`}</h2>
      <h2>{`Email: ${user?.email}`}</h2>
      <h2>{`location: ${user?.location.city} ${user?.location.country}`}</h2>
      <h2>{`gender:${user?.gender}`}</h2>

      <hr />
    </div>
  )
}

export default UsersRandom