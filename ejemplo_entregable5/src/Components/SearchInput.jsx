import React from 'react'

export const SearchInput = ({setPokeSearch,setOptionType}) => {

    const handleSubmit=e=>{
        e.preventDefault()
        setPokeSearch(e.target.searchText.value.trim().toLowerCase())
        setOptionType("ALL")
        e.target.searchText.value=""
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" id="searchText" placeholder='Search a pokemon'/>
        <button>Search</button>

    </form>
  )
}
