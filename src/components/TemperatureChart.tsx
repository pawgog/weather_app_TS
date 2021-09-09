import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import Select from './Select';
import { WeatherChart, TSelectWeatherData } from '../types/WeatherAppTypes';
import { LineChart } from '../style/TemperatureChart.style';
import { filterWeatherData, getWeatherDateArray, getBothTempDetailsChart, getWeatherDetailsChart } from '../common/functions';

function TemperatureChart({ weatherList }: WeatherChart) {
  const [selectWeatherData, setSelectWeatherData] = useState<TSelectWeatherData>({
    weatherSign: '',
    selectWeather: ''
  });
  const [selectDataArray, setSelectDataArray] = useState<Array<number>>([]);
  const [selectDoubleDataArray, setSelectDoubleDataArray] = useState<Array<number>>([]);

  const filterWeather = filterWeatherData(weatherList);
  const { weatherDate } = getWeatherDateArray(filterWeather);
  const selectValues = ['temperature', 'feels like', 'compare temperature', 'humidity', 'pressure'];

  useEffect(() => {
    const selectInitData = 'temp';
    getWeatherDetails(selectInitData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWeatherDetails = (selectValuesDetail : string) => {
    if(selectValuesDetail !== 'compare temperature') {
      const { weatherSelectedSign, weatherSign, selectWeather } = getWeatherDetailsChart(filterWeather, selectValuesDetail);
      setSelectDataArray(weatherSelectedSign);
      setSelectWeatherData({
        weatherSign,
        selectWeather
      });
    } else {
      const { weatherTempSelected, weatherTempFeelSelected, weatherSign, selectWeather } = getBothTempDetailsChart(filterWeather);
      setSelectDataArray(weatherTempSelected);
      setSelectDoubleDataArray(weatherTempFeelSelected);
      setSelectWeatherData({
        weatherSign,
        selectWeather
      });
    }
  }

  const onChangeSelect = (select : string) => {
    getWeatherDetails(select);
  }

  const { weatherSign, selectWeather } = selectWeatherData;

  const state = {
    labels: weatherDate,
    datasets: [
      {
        backgroundColor: '#f2f7f5',
        borderColor: '#475d5b',
        borderWidth: 2,
        data: selectDataArray
      },
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
            return `${tooltipItem['formattedValue']} ${weatherSign}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: selectWeather !== 'pressure',
        ticks: {
          callback: function(num: number) {
            return `${num} ${weatherSign}`;
          }
        }
      }    
    },
  }

  return (
    <LineChart>
      <Select
        dataName="weather"
        selectName={selectWeather}
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