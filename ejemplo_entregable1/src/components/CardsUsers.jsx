import React from 'react'

const CardsUsers = ({usuario,color,getRandomAll}) => {

  const changeUser={


  }

  
  return (
    <div className="container" style={{color:`${color}`}}>
      <img className ="container__img" src={`${usuario.picture.large}`} alt="" />
      <div className='container__info'>
        <h2 className ="container__nombre">{`${usuario.name.title} ${usuario.name.first} ${usuario.name.last}` }</h2>
        <p className='container__item'><strong>Gender:</strong>{`${usuario.gender}`}</p>
        <p className='container__item'><strong>Mail:</strong>{`${usuario.email}`}</p>
        <button onClick={getRandomAll} className='container__btn' style={{backgroundColor:`${color}`}}>&#62;</button>
      </div>
    </div>
        
  
  )
}

export default CardsUsers