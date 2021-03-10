import { useWeatherApi } from '../common/fetchWetherData';

function Weather({ cityName } : { cityName: string }) {
  const { data, isLoading, isError } = useWeatherApi(cityName)
  console.log(data, isLoading, isError);

  return (
      <div className="weather-app__main">
        Main component
      </div>
    );
  }

export default Weather;