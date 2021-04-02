import { WeatherDetailsProps } from '../types/WeatherAppTypes';

function WeatherDetails({ weatherDetails } : WeatherDetailsProps) {
  const { list } = weatherDetails;
  console.log(list);
  
  return (
      <div>Main Compoonent</div>
    );
  }

export default WeatherDetails;