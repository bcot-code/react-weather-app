import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div className="Weatherinfo">
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.country}</li>
        <li className="description">
          forecast: {""}
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>

          <div className="float-end">
            <span className="temp">{Math.round(props.data.temperature)}</span>
            <span className="unit">°C</span> | °F
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}</li>
            <li>Wind:{props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}