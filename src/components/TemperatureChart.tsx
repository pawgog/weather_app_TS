import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import Select from './Select';
import { WeatherChart } from '../types/WeatherAppTypes';
import { LineChart } from '../style/TemperatureChart.style';
import { filterWeatherData, getWeatherDateArray, getWeatherTempArray } from '../common/functions';

function TemperatureChart({ weatherList }: WeatherChart) {
  const [selectData, setSelectData] = useState<Array<number>>([]);
  const filterWeather = filterWeatherData(weatherList);
  const { weatherDate } = getWeatherDateArray(filterWeather);
  const { weatherTemperature } = getWeatherTempArray(filterWeather);
  const selectValues = ['temp', 'humidity', 'pressure'];

  useEffect(() => {
    setSelectData(weatherTemperature);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeSelect = (select : string) => {
    console.log('change value', select);
    const weatherSelected: any = {
      'temp': getWeatherTempArray(filterWeather),
      'humidity': getWeatherTempArray(filterWeather),
      'pressure': getWeatherTempArray(filterWeather),
    };
    const { weatherTemperature } = weatherSelected[select];
    setSelectData(weatherTemperature);
  }

  const state = {
    labels: weatherDate,
    datasets: [
      {
        label: 'Temperature',
        backgroundColor: '#f2f7f5',
        borderColor: '#475d5b',
        borderWidth: 2,
        data: selectData
      }
    ]
  }

  const options = {
    type: 'line',
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
      <Select
        dataName='weather'
        selectValues={selectValues}
        onChangeSelect={onChangeSelect}
      />
        <Line
          data={state}
          options={options}
        />
    </LineChart>
  );
}

export default TemperatureChart;