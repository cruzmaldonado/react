import axios from "axios";
import React from "react";
import {useForm} from "react-hook-form"

const FormLogin = () => {
  const {register,handleSubmit,reset}=useForm()

  const submit = data=>{
console.log(data);
//  reset({
//     email:"",
//     password:""
    
//  })
//  aca no se usa useEffect ya que solo se hace el post 
//cuando se realiza el onSubmit
    const URL= `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`
    //el post recibe data porque "data" ya es un objeto con 
    //la estructura que nos piden
    axios.post(URL,data)
    .then(res=>{localStorage.setItem("token",res.data.data.token)
console.log(res.data.data)})
    .catch(err=>console.log(err))


  }
  //localStorage:API que viene en los navegadores que nos sirve
  //para guardar informacion
  //esto se guarda en la misma URl
  //esto es util porque la informacion no se pierde si se da f5

  return (
    <form className="login__form" onSubmit={handleSubmit(submit)}>
      <h2 className="login__title">
        Welcome! Enter your email and password to continue
      </h2>
      <div className="login__div-email">
        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input {...register("email")}
         className="login__input"
        type="email" id="email" />
      </div>
      <div className="login__div-password">
        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input {...register("password")}
         className="login__input"
         type="password" id="password" />
      </div>
      <button className="login__btn">login</button>
    </form>
  );
};

export default FormLogin;
