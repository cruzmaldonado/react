
import './App.css'
import CardUser from './components/CardUser'
import {useSelector,useDispatch} from "react-redux"
import {change} from "./store/slices/card.slice"




function App() {

     const change1   =  useSelector(state=>state.changeSlice)
     const dispatch=useDispatch()
     const handleChange= () =>dispatch(change())


  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={handleChange}>show/hide CardUser</button>
      
      <CardUser change1={change1} />

    </div>
  )
}

export default App
