import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Location from './Location';
import WeatherReport from '../WeatherReport';

function App() {
  const [cityName, setCityName] = useState('');
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false); // State to track error status
  const [backgroundColor, setBackgroundColor] = useState(''); // State to track background color

  const handleSearch = async () => {
    setIsLoading(true);
    setIsError(false); // Reset error state when starting a new search

    try {
      const api = `https://api.openweathermap.org/data/2.5/weather?appid=d05338f9dc9a58bef510aa9f783d21be&q=${cityName}`;
      const res = await axios.get(api);
      setSearchData(res.data);
      setCityName('');
    } catch (err) {
      console.log("Error:", err);
      setIsError(true); // Set error state to true if an error occurs
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchData && searchData.main) { // Check if searchData and searchData.main exist
      // Calculate temperature in Celsius
      let temperatureCelsius = Math.floor(searchData.main.temp - 273.15);
      // console.log(temperatureCelsius)
      // Set background color based on temperature
      if (temperatureCelsius > 30) {
        setBackgroundColor('orange');
      } else if (temperatureCelsius >= 15 && temperatureCelsius <= 30) {
        setBackgroundColor('red');
      } else {
        setBackgroundColor('skyblue');
      }
    }
  }, [searchData])

  return (
    <div className='container'>
      <div className='input-container'>
        <input
          type="text"
          name="text"
          id="text"
          value={cityName}
          placeholder='Search for your preferred city...'
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <button className='button' onClick={handleSearch}>Search</button>
      </div>

      <div className='report-container'>
        {/* Show loading or error message based on state */}
        {isLoading ? <h1>Loading...</h1> : (
          isError ? <h1>Error: Please try valid city name..</h1> : (
            <>
              <Location searchData={searchData} backgroundColor={backgroundColor} />
              <WeatherReport searchData={searchData} backgroundColor={backgroundColor} />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default App;
