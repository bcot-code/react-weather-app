import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, displayUnit] = useState(`metric`);

  function convertToFahrenheit(event) {
    event.preventDefault();
    displayUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    displayUnit("celsius");
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
