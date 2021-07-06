import { format, fromUnixTime } from 'date-fns'
import { WeatherDetailsProps } from '../types/WeatherAppTypes';
import { WeatherDetailsStyled } from '../style/WeatherDetails.style'
import { convertTempToCel, filterWeatherData } from '../common/functions';

function WeatherDetails({ weatherDetails } : WeatherDetailsProps) {
  const { list } = weatherDetails;
  const filterWeather = filterWeatherData(list);

  return (
      <>
        {filterWeather.map(({dt, weather, main}) => {
          const { temp, pressure, humidity } = main;
          const [ weatherDescription ] = weather
          return (
            <WeatherDetailsStyled key={dt}>
              <div className="weather__date">
                <span>{format(fromUnixTime(dt), 'EEEE')}</span>
                <span>{format(fromUnixTime(dt), 'dd/MM/yyy')}</span>
              </div>
              <div className="weather__content">
                <div>
                  <i className="wi wi-thermometer"></i>
                  {convertTempToCel(temp)}°C
                </div>
                <div>
                  <i className="wi wi-humidity"></i>
                  {humidity}%
                </div>
                <div>
                  <i className="wi wi-barometer"></i>
                  {pressure} hPa
                </div>
                <div className="weather__description">
                  {weatherDescription.main} / {weatherDescription.description}
                </div>
              </div>
            </WeatherDetailsStyled>
          )
        })}
      </>
    );
  }

export default WeatherDetails;