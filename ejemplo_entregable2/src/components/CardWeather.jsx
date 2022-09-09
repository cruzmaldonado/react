
import axios from 'axios'
import { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'

const CardWeather = ({coords}) => {
    
    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()
    const [isCelsius, setIsCelsius] = useState(true)
    const [IsLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{
    if(coords){
        const APIKey=`b53476ea8872285f08d886f4c2b88536` 
        const url=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&lang=es&appid=${APIKey}`
        axios.get(url)
            .then(res => {
              setWeather(res.data)
              const temperature={ 
                celsius:`${Math.round(res.data.main.temp -273.15)}  °C`,
                fahrenheit:`${Math.round((res.data.main.temp -273.15)*9/5 +32)}  °F`  
                
              }
              setTemp(temperature)
              setIsLoading(false)
            })
            .catch(err => console.log(err))
    }
       
  },[coords])
  console.log(weather)
  const handClick=()=>setIsCelsius(!isCelsius)
  if(IsLoading){
    return <LoadingScreen/>
  } 
  else{
  return (
    <article className='card'>
      <h1 className='card__title'>Weather app</h1>
      <h2>{`${weather?.name},${weather?.sys.country}`}</h2>
      <div className='card__info'>
        
        <div className='card_info__img'>
          <img src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="weather" />
        </div>
        <div className="card__info__description">
          <h3>&#34;{weather?.weather[0].description}&#34;</h3>
          <ul>
            <li><span>wind speed:{weather?.wind.speed}m/s</span></li>
            <li><span>clouds:{weather?.clouds.all}%</span></li>
            <li><span>pressure: {weather?.main.pressure} hPa</span></li>
          </ul>
        </div>
      </div>
      <h2>{isCelsius ? temp?.celsius: temp?.fahrenheit}</h2>
    <button onClick={handClick}>{isCelsius? "chance to °F":"chance to °c"} </button>
    </article>
  )
  }
}

export default CardWeather