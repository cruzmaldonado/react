import React from 'react'
import { useState } from 'react'

const Form = () => {

const [search, setSearch] = useState("")
    const handleInput=(e)=>{

        setSearch(e.target.value)
    }
    
  return (
    <div>

    <form >
        <h2>Form</h2>
      <input type="text" value={search}onChange={handleInput} />
     <h1>valor de search:   {search}</h1>

      </form>

    </div>
  )
}

export default Form