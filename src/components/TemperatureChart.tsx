import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import Select from './Select';
import { WeatherChart, TSelectWeatherData } from '../types/WeatherAppTypes';
import { LineChart } from '../style/TemperatureChart.style';
import { filterWeatherData, getWeatherDateArray, getWeatherDetailsChart } from '../common/functions';

function TemperatureChart({ weatherList }: WeatherChart) {
  const [selectWeatherData, setSelectWeatherData] = useState<TSelectWeatherData>({
    getWeatherSigned: '',
    selectWeather: ''
  });
  const [selectDataArray, setSelectDataArray] = useState<Array<number>>([]);

  const filterWeather = filterWeatherData(weatherList);
  const { weatherDate } = getWeatherDateArray(filterWeather);
  const selectValues = ['temp', 'humidity', 'pressure'];

  useEffect(() => {
    const { getWeatherSelected, getWeatherSigned, selectWeather } = getWeatherDetailsChart(filterWeather, 'temp');
    setSelectDataArray(getWeatherSelected);
    setSelectWeatherData({
      getWeatherSigned,
      selectWeather
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeSelect = (select : string) => {
    const { getWeatherSelected, getWeatherSigned, selectWeather } = getWeatherDetailsChart(filterWeather, select);
    setSelectDataArray(getWeatherSelected);
    setSelectWeatherData({
      getWeatherSigned,
      selectWeather
    });
  }

  const state = {
    labels: weatherDate,
    datasets: [
      {
        backgroundColor: '#f2f7f5',
        borderColor: '#475d5b',
        borderWidth: 2,
        data: selectDataArray
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
            return `${tooltipItem['formattedValue']} ${selectWeatherData.getWeatherSigned}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(num: number) {
            return `${num} ${selectWeatherData.getWeatherSigned}`;
          }
        }
      }    
    },
  }

  return (
    <LineChart>
      <Select
        selectName={selectWeatherData.selectWeather}
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