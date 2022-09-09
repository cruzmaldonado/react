import React from 'react'

const FormSubmit = () => {

const [formInfo, setFormInfo] = useState()

  const handleSubmit = e =>{
    e.preventDefault()
    const obj={}
    obj.name=e.target.name.value
    obj.email=e.target.email.value
    obj.lastname=e.target.lastname.value
    setFormInfo(obj)
  }
  return (
    <div>
<h2>hello desde formSubmit</h2>
<form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input id="name" type="text" placeholder='name' /><br/>
      <label htmlFor="lastname">Apellido:</label>
      <input id="lastname" type="text" placeholder='lastname' /><br/>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" placeholder='email' /><br/>  
      <button>Submit</button>
    </form>


    </div>
  )
}

export default FormSubmit 