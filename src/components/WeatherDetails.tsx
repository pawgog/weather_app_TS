// import { WeatherDetailsProps } from '../types/WeatherAppTypes';

function WeatherDetails({ weatherDetails } : any) {
  const { list } = weatherDetails;
  console.log(list);
  
  return (
      <div>Main Compoonent</div>
    );
  }

export default WeatherDetails;