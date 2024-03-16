import React, { memo } from 'react';

function WeatherReport(props) {
  const { searchData, backgroundColor } = props;

  if (!searchData) {
    return <div></div>;
  }

  // Calculate temperature in Celsius
  const temperatureCelsius = Math.floor(searchData.main.temp - 273.15);

  return (
    <div className='weather-report-container' style={{ backgroundColor }}>
      <h1>Weather Report</h1>
      <div className='weather-box'>
        <div className='weather'>
          <h1>{temperatureCelsius}<sup>∘</sup>C | {Math.floor((searchData.main.temp - 273.15) * 9 / 5 + 32)}<sup>∘</sup>F</h1>
          <p>Feels Like : {Math.floor(searchData.main.feels_like - 273.15)}<sup>∘</sup>C</p>
        </div>
        <div className='sunny'>
          <h1>{searchData.weather[0].description}</h1>
        </div>
        <div className='humidity'>
          <div>Humidity<p>{searchData.main.humidity}</p> </div>
          <div>Wind Speed<p>{searchData.wind.speed}</p></div>
          <div>Pressure<p>{searchData.main.pressure}</p></div>
          <div>Wind Gust<p>{searchData.wind.gust}</p></div>
        </div>
      </div>
    </div>
  );
}

export default memo(WeatherReport);
