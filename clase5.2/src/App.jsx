import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'


function App() {
  const [isLogged, setIsLogged] = useState(false)

  const changeIsLogged=()=>setIsLogged(true)

  return (
    
        <Routes>

          <Route path ="/login" element={<Login changeIsLogged={changeIsLogged} />}/>

          <Route element={<ProtectedRoutes isLogged={isLogged}/>}>
              <Route path="/" element={<h1>Home</h1>}/>
              <Route path="/aboutme" element={<h1>About me</h1>}/>
              <Route path="/contact" element={<h1>Contact</h1>}/>

          </Route>
      

        <Route path="/project" element={<h1>project</h1>}/>
        <Route path="/*" element={<h1>error 404</h1>}/>

        </Routes>
         
  )
}

export default App
