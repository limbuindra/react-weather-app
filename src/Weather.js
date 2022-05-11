import React ,{ useState }  from 'react'
import axios from 'axios';
const Weather = () => {
const [data, setData] = useState({})
const [location, setLocation]=useState('');
     const url= `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6fd26d3f0e7adb0c42cf4e9ac5c4ada9`;
const searchLocation =(event =>{
    if(event.key === 'Enter'){
        axios.get (url).then ((response) =>{
            setData(response.data)
            console.log(response.data)
        })
    } 
})
        
  return (
<div className="app">
    <div className="search">
        <input
         type="text"
         placeholder='Enter the location'
         onKeyPress={searchLocation}
         value={location} 
         onChange={event => setLocation(event.target.value)}/>
    </div>
    <div className="container">
    {data.name != undefined &&

        <div className="top">
            <div className="location">
<h2><i className="fas fa-street-view"></i> {data.name}</h2>
            </div>
            <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1>: null}
            
            </div>
            <div className="description">
           <h3>Weather Condition:</h3> { data.weather ? <p>{data.weather[0].main}</p>:null}            </div>
            </div>
}
        {data.name != undefined &&

        <div className="bottom">
            <div className="feels">
             <p>Feels Like</p>
             { data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p>: null}
            </div>
            <div className="humidity">
                <p>Humidity</p>
             {data.main ? <p  className='bold'>{data.main.humidity}%</p>:null}
            </div>
            <div className="wind">
                <p>Wind Speed</p>
            {data.wind ? <p  className='bold'>{data.wind.speed.toFixed()}MPH</p>: null}
            </div>
        </div>
}
    </div>
</div>
)}

export default Weather;