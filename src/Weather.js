import React, { useState } from "react";
import axios from "axios";
import Loadingprocess from "./Loadingprocess";

import WeatherInfo from "./Weatherinfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherCondition, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  //Search for City
  function search() {
    let apiKey = process.env.REACT_APP_Weather_iD;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handSearch(event) {
    event.preventDefault();
    search();
  }
  function handleCitychange(event) {
    setCity(event.target.value);
  }

  if (weatherCondition.ready) {
    return (
      <div className="Weather">
        <h2 className="locate">{weatherCondition.city}</h2>
        <form onSubmit={handSearch}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="locate city here..."
                className="form-control"
                autoFocus="on"
                onChange={handleCitychange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-success w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherCondition} />
      </div>
    );
  } else {
    search();
    return <Loadingprocess />;
  }
}
