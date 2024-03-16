import React, { useState } from 'react'
import axios from 'axios';
import './App.css'
import Location from './Location';
import WeatherReport from '../WeatherReport';


function App() {
  const [cityName, setCityName] = useState('')
  const [searchData , setSearchData] = useState()

  const handleSearch = async () => {
    try {
      const api = `https://api.openweathermap.org/data/2.5/weather?appid=d05338f9dc9a58bef510aa9f783d21be&q=${cityName}`

      const res = await axios.get(api)
      setSearchData(res.data)
      setCityName('')
    } catch (err) {
      console.log("No city found or there was an error:", err.code);
    }

  }
  return (
    <div className='container'>
      <div className='input-container'>
        <input type="text" name="text" id="text" value={cityName} placeholder='Search for your preffered city...' onChange={(e) => {
          setCityName(e.target.value)
        }} />
        <button className='button' onClick={handleSearch}>Search</button>

      </div>
      <div className='report-container'>
        <Location searchData={searchData}/>
        <WeatherReport searchData={searchData}/>
      </div>

    </div>
  )
}

export default App
