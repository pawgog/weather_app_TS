import { format, fromUnixTime } from 'date-fns'
import { TWeatherProps } from '../types/WeatherAppTypes';

export const convertTempToCel = (temp : number) => {
    return `${Math.round(temp - 273.15)}`;
}

export const filterWeatherData = (weatherList : Array<TWeatherProps>) => {
    return weatherList.filter((item) => format(fromUnixTime(item.dt), 'HH') === '14');
}

export const getWeatherDateArray = (weatherList : Array<TWeatherProps>) => {
    const weatherDate = weatherList.map((list) => format(fromUnixTime(list.dt), 'EEEE'));
    return {
        weatherDate
    }
}

export const getWeatherTempArray = (weatherList : Array<TWeatherProps>) => {
    const weatherTemperature = weatherList.map((list) => Number(convertTempToCel(list.main.temp)));
    return {
        weatherTemperature
    }
}