import Label from './Label';
import WeatherDetails from './WeatherDetails';
import Loading from './Loading';
import ErrorPage from './Error';
import { WeatherProps } from '../types/WeatherAppTypes';
import { WeatherMain } from '../style/Weather.style'
import { useWeatherApi } from '../common/fetchWetherData';



function Weather({ cityName, clearCityName } : WeatherProps) {
  const { data, isLoading, isError } = useWeatherApi(cityName);
  console.log(data, isLoading, isError);

  return (
    <>
      {isError ? (
        <ErrorPage />
      ) : (
        <>
          {!isLoading ? (
            <>
              <Label cityDetails={data} />
              <WeatherMain>
                <WeatherDetails weatherDetails={data} />
                <button onClick={clearCityName}>clean</button>
              </WeatherMain>
            </>
          ) : (
            <Loading />
          )}
        </>
      )}

    </>
  );
  }

export default Weather;
