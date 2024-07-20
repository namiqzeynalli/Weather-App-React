import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ data }) => {
  return (
    <div className="card-container">
      {data?.forecast?.forecastday?.map((day) => (
        <div className="data-card" key={day.date}>
          <p className="date">{day.date}</p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <p className="degree">{day.day.avgtemp_c} °C</p>
          <p className="weather-text">{day.day.condition.text}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;
