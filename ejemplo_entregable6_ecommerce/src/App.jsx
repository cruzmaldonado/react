import './App.css'
import { Home } from './components/routes/Home'
import Login from './components/routes/Login'
import  Purchases from './components/routes/Purchases'
import { NavLink, Route, Routes } from 'react-router-dom'
import ProductDetail from './components/routes/ProductDetail'
import { Header } from './components/shared/Header'
import Cart from './components/shared/Cart'
import { ProtectedRoutes } from './components/routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from './store/slice/products.slice'
// import { useEffect, useState } from 'react' 
// import axios from 'axios'


function App() {


  const dispatch =useDispatch()
useEffect(() => {
    dispatch(getAllProducts())
}, [])
  // useEffect(() => {
  //   const URL="https://ecommerce-api-react.herokuapp.com/api/v1/users"
  //   const obj={
  //       firstName: "Cruz",
  //       lastName: "Maldonado",
  //       email: "andress@gmail.com",
  //       password: "123456789",
  //       phone: "1345678910",
  //       role: "admin"
  //   }  
  //   axios.post(URL, obj)
  //     .then(res=>console.log(res.data))
  //     .catch(err=>console.log(err))

  // }, [])
  

  return (
    <div className="App">
    <h1>helloWord</h1>
    <Header/>
      
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route element={<ProtectedRoutes/>}>

      <Route path="/Purchases" element={<Purchases/>}/>
      <Route path="/cart" element={<Cart/>}/> 
      </Route>
      <Route path="/product/:id" element={<ProductDetail/>}/> 

    </Routes>
    </div>
  )
}

export default App
