import { WeatherChart } from '../types/WeatherAppTypes';
import { Line } from 'react-chartjs-2';

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
    <div>
        <Line
          data={state}
          type='line'
        />
    </div>
  );
}

export default TemperatureChart;