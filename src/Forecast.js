import React, { useState, useEffect } from "react";

import WeatherForDay from "./WeatherForDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoad] = useState(false);
  const [forecast, setFore] = useState("");

  useEffect(() => {
    setLoad(false);
  }, [props.coord]);

  function handleResp(response) {
    setFore(response.data.daily);
    setLoad(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let key = `e0a5a97de9a0b7a951e9d154a8f9bad8`;
    let long = props.coord.lon;
    let lat = props.coord.lat;
    let urlAp = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}`;

    axios.get(urlAp).then(handleResp);
    return null;
  }
}
