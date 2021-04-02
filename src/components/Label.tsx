import { format, fromUnixTime } from 'date-fns'
import { LabelProps } from '../types/WeatherAppTypes';
import { LabelStyled, SunIconStyle } from '../style/Label.style';
import { ReactComponent as Sunrise } from '../assets/sunrise.svg';
import { ReactComponent as Sunset } from '../assets/sunset.svg';
import '../style/cssStyle/ButtonClose.css';

function Label({ cityDetails, clearCityName } : LabelProps) {
  const { city } = cityDetails;
  console.log(city);
  
  return (
      <LabelStyled>
        {city.name} 
        <SunIconStyle>
          <Sunrise />
            <span>{format(fromUnixTime(city.sunrise), 'HH:mm')}</span>
          <Sunset />
            <span>{format(fromUnixTime(city.sunset), 'HH:mm')}</span>
        </SunIconStyle>
        <div className="closeOut" onClick={clearCityName}>
          <div className="closeInn">
            <label>Back</label>
          </div>
        </div>
      </LabelStyled>
    );
  }

export default Label;
