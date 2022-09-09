
import './App.css'

import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>hola Mundo</h1>

      <Card countries="venezuela"/>
      <Card countries="peru"/>  
      <Card countries="chile"/>  
      <Card countries="colombia"/>        
    </div>
  )
}

export default App
