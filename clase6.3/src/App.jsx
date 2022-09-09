import {useEffect} from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers} from "./store/slices/users.slice"

function App() {
  //useSelector va a la store y trae la informacion del estado global
  //state representa reducer en index
  const dispatch=useDispatch()
  
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  const users=useSelector(state=>state.users)
  



  return (
    <div className="App">
      {
        
        users?.results.map(user=>(
          <div key={user.email}>
            <h1>User:{user.name.title} {user.name.first} {user.name.last}</h1>
            <img src={user.picture.medium} alt="" />
            <hr/>

          </div>
        ))
      }
    </div>
  )
}

export default App
