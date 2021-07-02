import { Line } from 'react-chartjs-2';
import { format, fromUnixTime } from 'date-fns'

import { WeatherChart } from '../types/WeatherAppTypes';
import { LineChart } from '../style/TemperatureChart.style';
import { convertTempToCel } from '../common/functions';

function TemperatureChart({ weatherList }: WeatherChart) {
  const filterWeather = weatherList.filter((item) => format(fromUnixTime(item.dt), 'HH') === '14');
  const weatherDate = filterWeather.map((list) => format(fromUnixTime(list.dt), 'EEEE'));
  const weatherTemperature = filterWeather.map((list) => Number(convertTempToCel(list.main.temp)));

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