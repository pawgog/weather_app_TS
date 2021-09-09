import { format, fromUnixTime } from 'date-fns'
import { TWeatherProps } from '../types/WeatherAppTypes';

export const convertTempToCel = (temp : number) => {
    return `${Math.round(temp - 273.15)}`;
}

export const filterWeatherData = (weatherList : Array<TWeatherProps>) => {
    return weatherList.filter((item) => format(fromUnixTime(item.dt), 'HH') === '14');
}

export const getWeatherDateArray = (weatherList : Array<TWeatherProps>) => {
    const weatherDate = weatherList.map((list) => format(fromUnixTime(list.dt), 'EEEE (dd/MM)'));
    return {
        weatherDate
    }
}

export const getWeatherDetailsChart = (weatherList : Array<TWeatherProps>, select : string) => {
    const checkSelect = {
        'temperature': 'temp',
        'feels like': 'feels_like',
        'humidity': 'humidity',
        'pressure': 'pressure'
      }[select] || 'temp';
    const weatherSelected: any = {
        'feels_like': weatherList.map((list) => Number(convertTempToCel(list.main.feels_like))),
        'temp': weatherList.map((list) => Number(convertTempToCel(list.main.temp))),
        'humidity': weatherList.map((list) => Number(list.main.humidity)),
        'pressure': weatherList.map((list) => Number(list.main.pressure)),
    };
    const weatherSignedObject: any = {
        'feels_like': '°C',
        'temp': '°C',
        'humidity': '%',
        'pressure': 'hPa',
    };
    const weatherSelectedSign = weatherSelected[checkSelect];
    const weatherSign = weatherSignedObject[checkSelect];

    return {
        weatherSelectedSign,
        weatherSign,
        selectWeather: select
    }
}