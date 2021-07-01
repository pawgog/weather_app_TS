import { Line } from 'react-chartjs-2';

import { WeatherChart } from '../types/WeatherAppTypes';
import { LineChart } from '../style/TemperatureChart.style';

function TemperatureChart({ weatherList }: WeatherChart) {
  // console.log(weatherList);
  
  const state = {
    labels: [],
    datasets: [
      {
        label: 'Temperature',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: []
      }
    ]
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