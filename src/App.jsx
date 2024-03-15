import React, { useState } from 'react'
import axios from 'axios';



function App() {
  const [cityName, setCityName] = useState()

  const handleSearch = async () => {
    try {
      const api = `https://api.openweathermap.org/data/2.5/weather?appid=d05338f9dc9a58bef510aa9f783d21be&q=${cityName}`

      const res = await axios.get(api)
      console.log(res.data.name)


    } catch (err) {
      console.log(err)
    }

  }
  return (
    <div>
      <input type="text" name="text" id="text" onChange={(e) => {
        setCityName(e.target.value)
      }} />
      <button onClick={handleSearch}>search</button>

    </div>
  )
}

export default App
