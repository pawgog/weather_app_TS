import { Line } from 'react-chartjs-2';

import { WeatherChart } from '../types/WeatherAppTypes';
import { LineChart } from '../style/TemperatureChart.style';
import { filterWeatherData, getWeatherDataArray } from '../common/functions';

function TemperatureChart({ weatherList }: WeatherChart) {
  const filterWeather = filterWeatherData(weatherList);
  const { weatherDate, weatherTemperature } = getWeatherDataArray(filterWeather);

  const state = {
    labels: weatherDate,
    datasets: [
      {
        label: 'Temperature',
        backgroundColor: '#f2f7f5',
        borderColor: '#475d5b',
        borderWidth: 2,
        data: weatherTemperature
      }
    ],
    options: {
      plugins:{
        legend: {
         display: false
        }
       }
    }
  }

  return (
    <LineChart>
        <Line
          data={state}
          type='line'
        />
    </LineChart>
  );
}

export default TemperatureChart;