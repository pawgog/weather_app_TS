export interface WeatherProps {
  cityName: string,
  clearCityName: React.MouseEventHandler<HTMLButtonElement>
}

export interface CityFormProps {
  cityNameInput: string,
  handleChangeCity : React.ChangeEventHandler<HTMLInputElement>,
  handleSubmitForm : React.FormEventHandler<HTMLFormElement>
}

export interface LabelProps {
  cityDetails: TDataProps
}

export interface WeatherDetailsProps {
  weatherDetails: Array<Object>
}

export type TDataProps = {
  city: TCityProps
  cnt: number
  cod: string
  list: Array<TWeatherProps>
  message: number
}

export type TWeatherProps = {
  clouds: {all: number}
  dt: number
  dt_txt: string
  main: {temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number}
  pop: number
  sys: {pod: string}
  visibility: number
  weather: Array<Object>
  wind: {speed: number, deg: number}
}

export type TCityProps = {
  coord: Object
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
}
