import { format, fromUnixTime } from 'date-fns'
import { WeatherDetailsProps } from '../types/WeatherAppTypes';
import { WeatherDetailsStyled } from '../style/WeatherDetails.style'

function WeatherDetails({ weatherDetails } : WeatherDetailsProps) {
  const { list } = weatherDetails;
  const filterWeather = list.filter((item) => format(fromUnixTime(item.dt), 'HH') === '14');

  return (
      <>
        {filterWeather.map((weather) => (
            <WeatherDetailsStyled key={weather.dt}>
              {weather.dt_txt}
            </WeatherDetailsStyled>
          )
        )}
      </>
    );
  }

export default WeatherDetails;