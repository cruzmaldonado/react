import { useState } from 'react'
import './App.css'
import CardsUser from './components/CardsUsers'
import users from "./json/users.json"
import colors from "./util/color.js"

function App() {
  
  const getRandomElement= arr=>{
    const random = Math.floor(Math.random()*arr.length) 
    return arr[random]
  }
  
  let usersRandom=getRandomElement(users)
  let colorRandom=getRandomElement(colors)
  
  const [randomUser, setrandomUser] = useState(usersRandom)
  const [colorRandomUsers, setColorRandomUsers] = useState(colorRandom)
  
  const getRandomAll=()=>{
    let usersRandom=getRandomElement(users)
  let colorRandom=getRandomElement(colors)
    setrandomUser(usersRandom)
    setColorRandomUsers(colorRandom)

  }
  
  return (
    
    <div  style={{backgroundColor:`${colorRandomUsers}`}} className="App">
       
      <CardsUser usuario={randomUser}
      color={colorRandomUsers}
      getRandomAll={getRandomAll} />
      
      
    </div>
  )
}

export default App
