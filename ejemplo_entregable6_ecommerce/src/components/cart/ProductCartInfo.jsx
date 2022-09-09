import axios from 'axios'
import React from 'react'
import getConfigure from '../../util/getConfig'

const ProductCartInfo = ({product,getAllProductCart}) => {

  const handleDelete = () => {
    const URl=`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL.product.id.getConfigure())
    .then(()=>getAllProductCart())
    
    .catch(err=>console.log(err))
  }
  return (
    <article className='cart__item'>
      <header className='class__item-header'>
        
        <h4 className='cart__subtitle'>{product.brand}</h4>
        <h3 className='cart__name'> {product.title}</h3>
      </header>
        <i className='fa-regular fa-trash-can' onClick={handleDelete}></i>
        <span className='cart__quantity'>{product.productsInCart.quantity}</span>
        <footer className='cart__item-footer'>
            <span className='cart__total__label'>total:</span>
            <p className='cart__total__number'>&#36;{product.price}</p>
        </footer>
    </article>
  )
}

export default ProductCartInfo