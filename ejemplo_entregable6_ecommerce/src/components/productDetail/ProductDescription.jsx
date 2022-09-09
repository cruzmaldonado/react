import React, { useState } from 'react'

const ProductDescription = ({productInfo}) => {

  const [counter, setCounter] = useState(1)

  const handlePlus = () => setCounter(counter+1)
  const handleMinus = () => {
    if(counter-1 >=1)
    setCounter(counter-1)
  }
  return (
    <section className='product-desc'>
        <h2 className='product-desc__name'>{productInfo?.title}</h2>
        <p className='product-desc-info'>
          {productInfo?.description}
        </p>
        <div className='product-info-body'>
          <article className='product-info-price'>
            <h3 className='product-info__price__label'>price</h3>
            <span className='product-info__price__value'>{productInfo
            ?.price} </span>
          </article>
          
          <article className='product-info-quantity'>
            <h3 className='product-info__quantity__label'>quantity</h3>
            <div className='product-info__quantity__value'>
              <button onClick={handleMinus} >-</button>
              <div>{counter}</div>
              <button onClick={handlePlus} >+</button>
            </div>
          </article>



        </div>
        
    </section>
  )
}

export default ProductDescription