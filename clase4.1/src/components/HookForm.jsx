import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios"

const HookForm = ({createNewCard,updateInfo,getAllCars,setUpdateInfo}) => {
  const defaultValue = {
    brand: '',
    model: '',
    color: '',
    year: '',
    price: ''
  }
  

    const {register,handleSubmit,reset}= useForm()
    useEffect(()=>{
      if(updateInfo){
        reset(updateInfo)
      } 



      
    },[updateInfo])
    

    const submit=(data)=>{
      if(updateInfo){
        //update
        const URL=`https://cars-crud.herokuapp.com/cars/${updateInfo.id}/`
    
        axios.patch(URL,data)
        .then(res=>
          {
            
            console.log(res.data)
            getAllCars()
    
          })
        .catch(err=>console.log(err))
    


      }
      else{
        //create
        createNewCard(data)
        reset(defaultValue)
        setUpdateInfo()
      }
    }

  return (
    <div>
        

        <form onSubmit={ handleSubmit(submit)}>
        <hr />
        <div>
        <label htmlFor="brand">Brand: </label>
        <input {...register('brand')} type="text" id='brand'/>
        </div>
        <div>
        <label htmlFor="model">Model: </label>
        <input {...register('model')} type="text" id='model' />
        </div>
        <div>
        <label htmlFor="color">Color: </label>
        <input {...register('color')} type="text" id='color' />
        </div>
        <div>
        <label htmlFor="year">Year: </label>
        <input {...register('year')} type="text" id='year' />
        </div>
        <div>
        <label htmlFor="price">Price: </label>
        <input {...register('price')} type="text" id='price' />
        </div>
        <button>Submit</button>
        <hr />
    </form>



    </div>
  )
}

export default HookForm