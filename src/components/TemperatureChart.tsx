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
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend: {
        display: false
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: function(tooltipItem: any) {
            return `${tooltipItem['formattedValue']} °C`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(num: number) {
            return `${num} °C`;
          }
        }
      }    
    },
  }

  return (
    <LineChart>
        <label htmlFor="weather">Change weather details:</label>
        <select name="weather" id="weather">
          <option value="temp">Temperature</option>
          <option value="humidity">Humidity</option>
          <option value="pressure">Pressure</option>
        </select>
        <Line
          data={state}
          options={options}
          type='line'
        />
    </LineChart>
  );
}

export default TemperatureChart;