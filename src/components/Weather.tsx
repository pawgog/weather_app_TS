import Label from '../components/Label';
import { WeatherMain } from '../style/Weather.style'
import { useWeatherApi } from '../common/fetchWetherData';

function Weather({ cityName } : { cityName: string }) {
  const { data, isLoading, isError } = useWeatherApi(cityName)
  console.log(data, isLoading, isError);

  return (
    <>
      <Label />
      <WeatherMain>
        Main component
      </WeatherMain>    
    </>
    );
  }

export default Weather;