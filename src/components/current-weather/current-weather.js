import "./current-weather.css"
import React from "react";


const CurrentWeather = ({data}) =>{

   const backgrounds = `icons/${data.weather[0].icon}B.jpg`
  
return (
    

        
 

    <div className="weather"   style= {{backgroundImage: `url(${backgrounds})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                        }} >
        <div className="top">
            <div>
                <p className="city" >{data.city}</p>
                <p className="weather-description">{data.weather[0].description}</p>
            </div>
                <img alt='weather' className="weather-icon" src= {`icons/${data.weather[0].icon}.png`} />
        </div>

         <div className="bottom">
            <p className="tempeture">{Math.round(data.main.temp)}°C</p>
            <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-labe">Details</span>

                    </div>
                    <div className="parameter-row">
                        <span className="parameter-labe">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-labe">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-labe">Huminity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-labe">Pressure</span>
                        <span className="parameter-value">{data.main.pressure}Pha</span>
                    </div>

            </div>
        </div>   

        

    </div>
 
)


}
export default CurrentWeather