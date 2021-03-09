function Weather({ weatherData } : { weatherData: any }) {
  const { data, isLoading, isError } = weatherData
  console.log(data, isLoading, isError);

  return (
      <div className="weather-app__main">
        Main component
      </div>
    );
  }

export default Weather;