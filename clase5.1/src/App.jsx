import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {Link} from "react-router-dom"
import Error404 from './components/Error404'
import CharacterId from './components/CharacterId'
import ParentRoute from './components/ParentRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
   

    <div className='App'>
      <header>
       <nav>
        <ul>
       
          <li> <Link to="/"> ir a home</Link></li>
          <li><Link to="/projects"> ir a projects</Link></li>
          <li><Link to="/aboutme"> ir a AboutMe</Link></li>
          <li><Link to="/contact"> ir a contact</Link></li>
          <li><Link to="/character/:id"> ir a character</Link></li>
        </ul>
        
        
        
       </nav>
      </header>
      <Routes>
        <Route element={<ParentRoute/>}>

        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='character/:id' element={<CharacterId/>} />
        </Route>
        <Route path='*' element={<Error404/>} />
      </Routes>
      <footer>
        <h1>Soy un footer</h1>
      </footer>
    </div>

  )
}
export default App
