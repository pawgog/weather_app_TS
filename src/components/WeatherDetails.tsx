import { WeatherDetailsProps } from '../types/WeatherAppTypes';
import { WeatherDetailsStyled } from '../style/WeatherDetails.style'

function WeatherDetails({ weatherDetails } : WeatherDetailsProps) {
  const { list } = weatherDetails;
  console.log(list);
  
  return (
      <WeatherDetailsStyled>Main Compoonent</WeatherDetailsStyled>
    );
  }

export default WeatherDetails;