import React from 'react';
import Label from './components/Label';
import Weather from './components/Weather';
import './App.css';

function App() {
  return (
    <div className="weather-app">
      <Label />
      <Weather />
    </div>
  );
}

export default App;
