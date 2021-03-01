import React from 'react';
import Weather from './Weather';
import Spinner from './Spinner';

export interface Props {
  spinnerActive: boolean;
}

function Main({ spinnerActive }: Props) {
  return (
      <>
      {spinnerActive ? (
        <Spinner />
      ) : (
      <div className="weather-app-home">
        <div className="weather-app-home__content">
          <Weather />
        </div>
      </div>
      )}
      </>
    );
  }

export default Main;