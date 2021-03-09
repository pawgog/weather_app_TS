import React from 'react';
import Label from './components/Label';
import Weather from './components/Weather';
import { useWeatherApi } from './common/fetchWetherData';
import './App.css';

function App() {
const weatherData = useWeatherApi(
  `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.REACT_APP_WEATHER_KEY}`
);

  return (
    <div className="weather-app">
      <Label />
      <Weather weatherData={weatherData} />
    </div>
  );
}

export default App;
