import { format, fromUnixTime } from 'date-fns'
import { WeatherDetailsProps } from '../types/WeatherAppTypes';
import { WeatherDetailsStyled } from '../style/WeatherDetails.style'
import { convertTempToCel, filterWeatherData } from '../common/functions';

function WeatherDetails({ weatherDetails } : WeatherDetailsProps) {
  const { list } = weatherDetails;
  const filterWeather = filterWeatherData(list);

  return (
      <>
        {filterWeather.map(({dt, weather, main, wind}) => {
          const { temp, pressure, humidity } = main;
          const [ { description, icon} ] = weather;
          const { speed } = wind;

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
                <div>
                  <i className="wi wi-strong-wind"></i>
                  {speed} m/s <i className="wi wi-wind towards-0-deg"></i>
                </div>
                <div className="weather__description">
                  <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="" width="60" height="60" />
                  <span>/</span>
                  {description}
                </div>
              </div>
            </WeatherDetailsStyled>
          )
        })}
      </>
    );
  }

export default WeatherDetails;