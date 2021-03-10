import React, { useState } from 'react';
import Label from './components/Label';
import Weather from './components/Weather';
import { useWeatherApi } from './common/fetchWetherData';
import './App.css';

function App() {
  const [cityName, setCityName] = useState('');
  const [cityData, setCityData] = useState({});
  // const weatherData = useWeatherApi(cityName);

  const handleChangeCity = (e : React.ChangeEvent<HTMLInputElement> & {
    target: HTMLButtonElement
  }) => {
    const { value } = e.target;
    setCityName(value);
  }

  const handleSubmitForm = (e : React.FormEvent) => {
    e.preventDefault();
    // const weatherData = useWeatherApi(cityName);
    setCityData(useWeatherApi(cityName));
  }

  return (
    <>
      {cityName === '' ? (
        <div className="weather-app__form">
          <form onSubmit={handleSubmitForm}>
            <label>
              Imię:
              <input type="text" name="name" value={cityName} onChange={handleChangeCity} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div className="weather-app">
          <Label />
          <Weather weatherData={cityData} />
        </div>
      )}
    </>
  );
}

export default App;
