import React from "react";
import "./index.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCard(props) {
  return (
    <div className="col">
      <div>
        <div
          className="card border-secondary mb-3"
          style={{ maxWidth: "80px" }}
        >
          <div className="card-header">{props.day}</div>
          <div className="card-body text-secondary">
            <h5 className="card-title">
              <WeatherIcon code={props.code} />
              {/* <img id="mon-icon" src={icons.mon} alt="weather-icon" /> */}
              <br />
              <span className="temp">
                <span id="monTemp">{props.temp}</span>°
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
