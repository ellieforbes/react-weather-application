import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false });
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
    console.log(response);
setWeatherData({
    ready: true,
    date: new Date(response.data.time * 1000),
    city: (response.data.city),
    temperature: (response.data.temperature.current),
    description: (response.data.condition.description),
    wind: (response.data.wind.speed),
    humidity: (response.data.temperature.humidity),
    icon: (response.data.condition.icon),
});
}

function search(){
    const apiKey = "b5a70e3dbaf3379o5576fffe161ca0t4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit (event) {
    event.preventDefault();
search();
}

function handleCityChange(event) {
   setCity(event.target.value);
}

    if(weatherData.ready) {
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Enter a city"
                    className="form-control"
                    autoFocus="on" 
                    onChange={handleCityChange}
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
               <WeatherInfo data={weatherData} />
                </div>
            );
    } else {
       search();
        return "Loading..."
    }
}
