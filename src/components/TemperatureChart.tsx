// import { Line } from 'react-chartjs-2';
import { WeatherChart } from '../types/WeatherAppTypes';

function TemperatureChart({ weatherList }: WeatherChart) {
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
    <>
      <div>Chart</div>
    </>
  );
}

export default TemperatureChart;