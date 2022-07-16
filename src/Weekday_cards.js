import React from "react";

import "./index.css";

import sunnyCloudy from "./images/sunny_s_cloudy.png";
import partlyCloudy from "./images/partly_cloudy.png";
import rainCloudy from "./images/rain_s_cloudy.png";
import sunny from "./images/sunny.png";
import thunderStorms from "./images/thunderstorms.png";

export default function WeekDayCards() {
  return (
    <div className="cards">
      <h1>Paris</h1>
      <h4>
        <span id="week-Day">WED</span>
        <span id="time"> 12:50 </span>
        <br />
        humidity:
        <span id="humidity">60</span>
        %<br />
        wind: <span id="wind-speed">20</span>
        km/hour
      </h4>
      <h2>now</h2>
      <span className="now_weather">
        <img id="cur-weather" src={sunnyCloudy} alt="now-weather-icon" />
      </span>
      <span className="now_temp">
        <span id="now-value">20</span>
        <span className="temp_sign"></span>{" "}
        <span className="link_celsius">℃</span> |{" "}
        <span className="link_fahren">℉</span>
      </span>

      <div className="row">
        <div className="col">
          <div className="Mon">
            <div
              className="card border-secondary mb-3"
              style={{ maxWidth: "80px" }}
            >
              <div className="card-header">Mon</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">
                  <img id="mon-icon" src={thunderStorms} alt="weather-icon" />
                  <br />
                  <span className="temp">
                    <span id="monTemp">18</span>°
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="Tues">
            <div
              className="card border-secondary mb-3"
              style={{ maxWidth: "80px" }}
            >
              <div className="card-header">Tues</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">
                  <img id="tues-icon" src={rainCloudy} alt="weather-icon" />
                  <br />
                  <span className="temp">
                    <span id="tuesTemp">15</span>°
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="Wed">
            <div
              className="card border-secondary mb-3"
              style={{ maxWidth: "80px" }}
            >
              <div className="card-header">Wed</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">
                  <img id="wed-icon" src={sunny} alt="weather-icon" />
                  <br />
                  <span className="temp">
                    <span id="wedTemp">20</span>°
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="Thur">
            <div
              className="card border-secondary mb-3"
              style={{ maxWidth: "80px" }}
            >
              <div className="card-header">Thur</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">
                  <img id="thur-icon" src={rainCloudy} alt="weather-icon" />
                  <br />
                  <span className="temp">
                    <span id="thurTemp">22</span>°
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="Fri">
            <div
              className="card border-secondary mb-3"
              style={{ maxWidth: "80px" }}
            >
              <div className="card-header">Fri</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">
                  <img id="fri-icon" src={partlyCloudy} alt="weather-icon" />
                  <br />
                  <span className="temp">
                    <span id="friTemp">20</span>°
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="Sat">
            <div
              className="card border-secondary mb-3"
              style={{ maxWidth: "80px" }}
            >
              <div className="card-header">Sat</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">
                  <img id="sat-icon" src={partlyCloudy} alt="weather-icon" />
                  <br />
                  <span className="temp">
                    <span id="satTemp">28</span>°
                  </span>
                </h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="Sun">
            <div
              className="card border-secondary mb-3"
              style={{ maxWidth: "80px" }}
            >
              <div className="card-header">Sun</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">
                  <img id="sun-icon" src={sunny} alt="weather-icon" />
                  <br />
                  <span className="temp">
                    <span id="sunTemp">30</span>°
                  </span>
                </h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
