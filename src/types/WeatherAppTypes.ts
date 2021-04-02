export interface WeatherProps {
  cityName: string,
  clearCityName: React.MouseEventHandler<HTMLDivElement>
}

export interface CityFormProps {
  cityNameInput: string,
  handleChangeCity : React.ChangeEventHandler<HTMLInputElement>,
  handleSubmitForm : React.FormEventHandler<HTMLFormElement>
}

export interface LabelProps {
  cityDetails: TDataProps
  clearCityName: React.MouseEventHandler<HTMLDivElement>
}

export interface WeatherDetailsProps {
  weatherDetails: TDataProps
}

export type TDataProps = {
  city: TCityProps
  cnt: number
  cod: string
  list: Array<TWeatherProps> | []
  message: number
}

export type TWeatherProps = {
  clouds: {all: number}
  dt: number
  dt_txt: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    temp_kf: number
    grnd_level: number
    humidity: number
  }
  pop: number
  sys: {pod: string}
  visibility: number
  weather: [{
    description: string
    icon: string
    id: number
    main: string
  }]
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
