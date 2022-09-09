import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { CardUser } from './components/CardUser'
import './App.css'




function App() {
  const [users, setUser] = useState()

  useEffect(() => {
    const URL="https://randomuser.me/api/?results=20"
    axios.get(URL)
    .then(res=>setUser(res.data.results))
    .catch(err=> console.log(err))


  },[])
  console.log(users)

  return (
    <div className="App">
      {
        users?.map(user=>
          <CardUser key ={user.login.uuid} user={user}/>
        )
      }
    </div>  
  )
}

export default App
