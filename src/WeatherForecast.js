import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);


function handleResponse(response){
    console.log(response.data);
    setForecast(response.data.daily)
    setLoaded(true);
}
if(loaded){
    return <div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <WeatherForecastDay data={forecast[0]}/>
        </div>
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