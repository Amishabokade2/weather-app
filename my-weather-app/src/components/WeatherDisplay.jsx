const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) return null;
    
    const { main, weather, wind } = weatherData;
    const temperature = main.temp - 273.15; // Convert from Kelvin to Celsius
  
    return (
      <div className="p-4 text-center bg-gradient-to-r from-purple-300 to-purple-500 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold">{weather[0].main}</h2>
        <img 
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} 
          alt="weather icon" 
          className="mx-auto my-2"
        />
        <p className="text-2xl">Temp: {temperature.toFixed(1)}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} km/h</p>
      </div>
    );
  };
  
  export default WeatherDisplay;
  