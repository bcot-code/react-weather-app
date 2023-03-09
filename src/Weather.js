import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherCondition, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAUhJREFUeNrt230NgzAQh2GkIAUJyJgMJCABCZNQKcxBHdyOpFkyEkYGV9oL75Lff2Rwz8pXe2tEpLlzGgAAAAAAAAAAYHsDg4+8Hp1m0ATNrJGNzGmbZdvOZN+lAFLRkyb+KHgvMX1H5wYgFR5OFL2VcATiMgA9uFbzzFD4Oss+2qoA9ID6k0P9yKnRVwGgBzJeWPg6Y1GAdIGSwpmKAFRS/C5CFoDCw/6v08EcIF3wpNL0WQHSrS5WDBDXt0hrgGfFxX+eE7IApCc8cZIuB0BwBBBMAZz9+l+jwApgcggwWQJEhwDRBMDp8P+cBhYAg2OAwQIgOAYIFgCzY4DZAkBcB4C7AywvcIwAAADgNsiDEI/CvAzxOsyECFNiTIoyLc7CCEtjLI6yPE6DBC0yNEnRJkejJK2yNEvTLs8fJgAAAAAAAADg1nkDlR7XfJiH1ggAAAAASUVORK5CYII=",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherCondition.ready) {
    return (
      <div className="Weather">
        <h2 className="locate">{weatherCondition.city}</h2>
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="locate city here..."
                className="form-control"
                autoFocus="on"
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
        <ul>
          <li>
            <FormattedDate date={weatherCondition.date} />
          </li>
          <li className="description">
            forecast: {""}
            {weatherCondition.description}
          </li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherCondition.iconUrl}
              alt={weatherCondition.description}
              className="float-left"
            />
            <div className="float-end">
              n
              <span className="temp">
                {Math.round(weatherCondition.temperature)}
              </span>
              <span className="unit">°C</span> | °F
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weatherCondition.humidity}</li>
              <li>Wind:{weatherCondition.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = process.env.REACT_APP_Weather_iD;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "The App is loading...";
  }
}
