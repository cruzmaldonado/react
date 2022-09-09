import React from 'react'

const CardCountry = ({country}) => {
  return (
    <article>
        <img src={country.flags.svg} alt={`${country.name.common}`} />


    </article>
  )
}

export default CardCountry