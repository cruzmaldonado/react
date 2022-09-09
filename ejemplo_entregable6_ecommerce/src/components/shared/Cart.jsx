import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfigure from '../../util/getConfig'
import ProductCartInfo from '../cart/productCartInfo'

const Cart = () => {
    const [cartProducts, setCartProducts] = useState()

    const getAllProductCart=()=>{
        const URL="https://ecommerce-api-react.herokuapp.com/api/v1/cart"
        axios.get(URL,getConfigure())
        .then(res=>setCartProducts(res.data.cart.products))
        .catch(err=>setCartProducts())
    }
    useEffect(() => {
        
        getAllProductCart()
        
    }, [])
   
    const handleCheckout=() => {
        const URL="https://ecommerce-api-react.herokuapp.com/api/v1/purchases"
        const obj={
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
        }
        axios.post(URL,obj,getConfigure())
        .then(err=>console.log(res.data))
        getAllProductCart()
        .catch(err=>console.log(err))
    }

  return (
    <section className='cart'>
        <h2 className='cart__tittle'>cart</h2>
        <div className='cart__container-item'>
        {

            cartProducts?.map(product=>(

                <ProductCartInfo getAllProductCart={getAllProductCart}
                key={product.id}
                product={product} />
            ))
        }
        </div>
        <hr />
        <footer className='cart__footer'>
            <span className='cart__total-global'>total</span>
            <p className='cart__total-global-value'>&#36;1350</p>
            <button onClick={handleCheckout} className='cart__btn'>checkout</button>
        </footer>


    </section>
  )
}

export default Cart