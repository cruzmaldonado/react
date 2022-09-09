import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import FormSubmit from './components/FormSubmit'

function App() {
  const [value, setValue] = useState()

  return (
    <div className="App">
   <h1>hello world</h1>
     <Form/>
   <hr />
     <FormSubmit/>
    </div>
  )
}

export default App
