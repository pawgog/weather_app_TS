import { format, fromUnixTime } from 'date-fns'
import { WeatherDetailsProps } from '../types/WeatherAppTypes';
import { WeatherDetailsStyled } from '../style/WeatherDetails.style'
import { convertTempToCel } from '../common/functions';

function WeatherDetails({ weatherDetails } : WeatherDetailsProps) {
  const { list } = weatherDetails;
  const filterWeather = list.filter((item) => format(fromUnixTime(item.dt), 'HH') === '14');

  return (
      <>
        {filterWeather.map(({dt, main}) => {
          const { temp, pressure, humidity } = main;
          return (
            <WeatherDetailsStyled key={dt}>
              <div className="weather__date">
                {format(fromUnixTime(dt), 'dd/MM/yyy')}
              </div>
              <div className="weather__content">
                <div>
                  <i className="wi wi-thermometer"></i>
                  {convertTempToCel(temp)}
                </div>
                <div>
                  <i className="wi wi-barometer"></i>
                  {pressure}
                </div>
                <div>
                  <i className="wi wi-humidity"></i>
                  {humidity}%
                </div>
              </div>
            </WeatherDetailsStyled>
          )
        })}
      </>
    );
  }

export default WeatherDetails;