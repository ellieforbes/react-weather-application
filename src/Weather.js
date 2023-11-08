import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false });

function handleResponse(response) {
    console.log(response);
    console.log(response.data.time);
setWeatherData({
    ready: true,
    date: new Date(response.data.time * 1000),
    city: (response.data.city),
    temperature: (response.data.temperature.current),
    description: (response.data.condition.description),
    wind: (response.data.wind.speed),
    humidity: (response.data.temperature.humidity),
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
});
}

    if(weatherData.ready) {
        return(
            <div className="Weather">
                
                <form>
                    <div className="row">
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Enter a city"
                    className="form-control"
                    autoFocus="on" 
                    />
                    </div>
                    <div className="col-3">
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-primary w-100"/>
                    </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li> <FormattedDate date={weatherData.date}/> </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row">
                <div className="col-6 mt-3">
                    <img src={weatherData.iconUrl} alt={weatherData.description} /> 
                    <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
                </div>
                <div className="col-6 mt-3">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {Math.round(weatherData.wind)} mph</li>
                    </ul>
                </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "b5a70e3dbaf3379o5576fffe161ca0t4";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading..."
    }
}
