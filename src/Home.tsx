import React, { useState } from 'react';
import Label from './components/Label';
import Weather from './components/Weather';
import './Home.css';

function Home() {
  const [cityNameInput, setCityName] = useState('');
  const [cityName, setCityData] = useState('');

  const handleChangeCity = (e : React.ChangeEvent<HTMLInputElement> & {
    target: HTMLButtonElement
  }) => {
    const { value } = e.target;
    setCityName(value);
  }

  const handleSubmitForm = async (e : React.FormEvent) => {
    e.preventDefault();
    setCityData(cityNameInput);
  }

  return (
    <>
      {cityName === '' ? (
        <div className="weather-app__form">
          <form onSubmit={handleSubmitForm}>
            <label>
              Imię:
              <input type="text" name="name" value={cityNameInput} onChange={handleChangeCity} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div className="weather-app">
          <Label />
          <Weather cityName={cityName} />
        </div>
      )}
    </>
  );
}

export default Home;
