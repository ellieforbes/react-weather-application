import React from "react";
import "./Weather.css";

export default function Weather(){
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
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Sunny</li>
            </ul>
            <div className="row">
            <div className="col-6 mt-3">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Sunny"/> 
                <span className="temperature">15</span><span className="unit">°C</span>
            </div>
            <div className="col-6 mt-3">
                <ul>
                    <li>Precipitation: 0%</li>
                    <li>Humidity: 49%</li>
                    <li>Wind: 5 mph</li>
                </ul>
            </div>
            </div>
        </div>
    )
}