import React from "react";
import { Icon } from "iweather_icons_react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "100",
    "01n": "100",
    "02n": "101",
    "02d": "101",
    "03d": "104",
    "03n": "104",
    "04d": "104",
    "04n": "104",
    "09d": "305",
    "09n": "305",
    "10d": "300",
    "10n": "300",
    "11n": "302",
    "11d": "302",
    "13d": "499",
    "13n": "499",
    "50d": "509",
    "50n": "509",
  };
  console.log(props.code);
  return <Icon name={codeMapping[props.code]} type="qweather"></Icon>;
}
