import React from "react";

import WeatherTemp from "./WeatherTemp.js";
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
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={65} />
            </div>

            <div className="float-end">
              <WeatherTemp celsius={props.data.temperature} />
            </div>
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
