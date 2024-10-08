const Forecast = ({ forecastData }) => {
    if (!forecastData) return null;
  
    return (
      <div className="grid grid-cols-5 gap-4 p-4">
        {forecastData.slice(0, 5).map((day, index) => {
          const temperature = day.main.temp - 273.15; // Convert from Kelvin to Celsius
          return (
            <div key={index} className="p-4 bg-white text-center rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{new Date(day.dt_txt).toDateString()}</h3>
              <img 
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                alt="weather icon" 
                className="mx-auto my-2"
              />
              <p>{day.weather[0].main}</p>
              <p>{temperature.toFixed(1)}°C</p>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Forecast;
  