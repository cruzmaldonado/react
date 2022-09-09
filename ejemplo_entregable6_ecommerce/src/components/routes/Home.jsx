import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slice/products.slice'
import { CardHome } from '../home/CardHome'

export const Home = () => {
    
const products=useSelector(state=>state.products)

console.log(products);
  return (
   
    <div className='home'>
        <div className='home__container-card'> 
        {
            products?.map(product=>(
                <CardHome 
                key={product.id}
                product={product}
                />
            ))
        }

        
        </div>



    </div>
  )
}
