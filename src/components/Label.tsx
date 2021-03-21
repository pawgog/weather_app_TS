interface LabelProps {
  cityDetails: TLabelProps
}

type TLabelProps = {
  city: TCityProps
  cnt: number
  cod: string
  list: Array<Object>
  message: number
}

type TCityProps = {
  coord: Object
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
}

function Label({ cityDetails } : LabelProps) {
  const { city } = cityDetails;
  console.log(city);
  
  return (
      <div className="weather-app__label">
        Label component {city.name}
      </div>
    );
  }

export default Label;