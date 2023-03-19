import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }
  function minTemp() {
    let temper = Math.round(props.data.temp.min);
    return temper;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="Forecast-temp">
        <span className="Fore-temp-max">{maxTemp()}°F</span>{" "}
        <span className="Fore-temp-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
