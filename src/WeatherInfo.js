import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
             <h1>{props.data.city}</h1>
                <ul>
                    <li> <FormattedDate date={props.data.date}/> </li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row">
                <div className="col-6 mt-3">
                    <img src={props.data.iconUrl} alt={props.data.description} /> 
                    <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span>
                </div>
                <div className="col-6 mt-3">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)} mph</li>
                    </ul>
                </div>
        </div>
        </div>
    );
}