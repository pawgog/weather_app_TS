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

export type TDataProps = {
  city: TCityProps
  cnt: number
  cod: string
  list: Array<Object>
  message: number
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