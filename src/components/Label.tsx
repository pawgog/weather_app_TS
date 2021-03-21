import { LabelProps } from '../types/WeatherAppTypes';

function Label({ cityDetails } : LabelProps) {
  const { city } = cityDetails;
  console.log(city);
  
  return (
      <div className="weather-app__label">
        Label component {city.name}
      </div>
    );
  }

export default Label;