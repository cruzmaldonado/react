import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import ProtectedRoutes from './Components/ProtectedRoutes'
import Pokedex from './Components/Pokedex'
import PokemonDetails from './Components/PokemonDetails'
import { Route,Routes} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<Pokedex/>}/>
          <Route path="/pokedex/:name" element={<PokemonDetails/>}/>

        </Route>
          <Route path="/*" element={<Pokedex/>}/>


      </Routes>
    </div>
  )
}

export default App
