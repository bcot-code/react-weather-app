import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project is by {""}{" "}
          <a href="https://github.com/bcot-code">Barbie</a> and is {""}
          <a
            href="https://github.com/bcot-code/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
