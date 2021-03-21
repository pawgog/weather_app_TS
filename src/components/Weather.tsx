import Label from '../components/Label';
import { WeatherMain } from '../style/Weather.style'
import { useWeatherApi } from '../common/fetchWetherData';

function Weather({ cityName, clearCityName } : { cityName: string, clearCityName: React.MouseEventHandler<HTMLButtonElement> }) {
  const { data, isLoading, isError } = useWeatherApi(cityName)
  console.log(data, isLoading, isError);

  return (
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
  );
  }

export default Weather;