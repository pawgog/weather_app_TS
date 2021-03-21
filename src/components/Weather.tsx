import Label from '../components/Label';
import { WeatherProps } from '../types/WeatherAppTypes';
import { WeatherMain } from '../style/Weather.style'
import { useWeatherApi } from '../common/fetchWetherData';



function Weather({ cityName, clearCityName } : WeatherProps) {
  const { data, isLoading, isError } = useWeatherApi(cityName);
  console.log(data, isLoading, isError);

  return (
    <>
      {isError ? (
        <div>Something went wrong!</div>
      ) : (
        <>
          {!isLoading ? (
            <>
              <Label cityDetails={data} />
              <WeatherMain>
                Main component
                <button onClick={clearCityName}>clean</button>
              </WeatherMain>
            </>
          ) : (
            <div>Loading</div>
          )}
        </>
      )}

    </>
  );
  }

export default Weather;