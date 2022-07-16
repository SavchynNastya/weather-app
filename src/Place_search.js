import React from "react";
import "./search_form_style.css";

export default function PlaceSearch() {
  return (
    <div className="searching">
      <div className="form">
        <form>
          <input type="text" placeholder=" choose the sity..." />
        </form>
      </div>
      <button id="current-location">
        <i className="fa-solid fa-location-dot" />
      </button>
    </div>
  );
}
