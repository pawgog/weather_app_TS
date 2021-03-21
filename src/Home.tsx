import React, { useState } from 'react';
import CityForm from './components/CityForm';
import Weather from './components/Weather';
import './Home.css';

function Home() {
  const [cityNameInput, setCityNameInput] = useState<string>('');
  const [cityName, setCityName] = useState<string>('');

  const handleChangeCity = (e : React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCityNameInput(inputValue);
  }

  const handleSubmitForm = async (e : React.FormEvent) => {
    e.preventDefault();
    setCityName(cityNameInput);
    setCityNameInput('');
  }

  const clearCityName = () => {
    setCityName('');
  }

  return (
    <div className="weather-app">
      {cityName === '' ? (
        <CityForm 
          handleSubmitForm={handleSubmitForm}
          handleChangeCity={handleChangeCity}
          cityNameInput={cityNameInput}
        />
      ) : (
        <Weather 
          cityName={cityName}
          clearCityName={clearCityName}
        />
      )}
    </div>
  );
}

export default Home;
