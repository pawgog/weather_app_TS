import React, { useState } from 'react';
import CityForm from './components/CityForm';
import Weather from './components/Weather';
import './Home.css';

function Home() {
  const [cityNameInput, setCityName] = useState('');
  const [cityName, setCityData] = useState('');

  const handleChangeCity = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLButtonElement;
    setCityName(value);
  }

  const handleSubmitForm = async (e : React.FormEvent) => {
    e.preventDefault();
    setCityData(cityNameInput);
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
        <Weather cityName={cityName} />
      )}
    </div>
  );
}

export default Home;
