import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="black"
      size={50}
      animate={true}
    />
  );
}
