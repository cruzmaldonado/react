import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CardHome = ({product}) => {

 const navigate= useNavigate()

 const handleClick = () => {
  navigate(`/product/${product.id}`)
 }  
const handleAddCart =()=>{
    
}
  return (
    <article className='card-home' onClick={handleClick}>
        <header>
            <img src={product.productImgs[0]} alt="" />
        </header>
        <div className='card-home__body'>
            <h3 className='card-home__name'>{product.title }</h3>
        <section className='card-home__price'>
            <h4 className='card.home__price__label'>price</h4>
            <span className='card-home__price__value'>&#36; {product.price}</span>
        </section>
        <button className='card.home__btn' onClick={handleAddCart}><i className="fa-solid fa-cart-plus"></i></button>
        </div>
        <hr />
    </article>    
  )
}
