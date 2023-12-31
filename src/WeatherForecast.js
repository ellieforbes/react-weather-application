import React, { useState, useEffect, } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

   useEffect(() => {
  setLoaded(false);
   }, [props.coordinates]);

function handleResponse(response){
    setForecast(response.data.daily)
    setLoaded(true);
}
if(loaded){
    return <div className="WeatherForecast">
    <div className="row">
        {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
                return (
        <div className="col col-holder" key={index}>
            <WeatherForecastDay data={dailyForecast}/>
        </div>
                );
            } else {
                return null;
            }
        })} 
    </div>
</div>
} else {
    let apiKey = "b5a70e3dbaf3379o5576fffe161ca0t4";
    let latitude = (props.coordinates.latitude);
    let longitude = (props.coordinates.longitude);
    
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
        return null;
}
}