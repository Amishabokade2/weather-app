import { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';
import Forecast from './Forecast';
import axios from 'axios';
import SearchBar from './SearchBar';

const MainWeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  // Function to fetch weather and forecast data based on latitude and longitude
  const fetchWeatherData = async (lat, lon) => {
    try {
      const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7f7c1ed7f260dffbcb36650c0ce18b2c`);
      setWeatherData(weatherRes.data);

      const forecastRes = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7f7c1ed7f260dffbcb36650c0ce18b2c`);
      setForecastData(forecastRes.data.list);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Default fetch for London's weather and forecast when the page loads
  useEffect(() => {
    const londonLat = 51.5074;
    const londonLon = -0.1278;
    fetchWeatherData(londonLat, londonLon);
  }, []);

  // When user searches for a city, this function gets triggered with new lat and lon
  const handleSearch = (lat, lon) => {
    fetchWeatherData(lat, lon);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-blue-200 p-4">
      <SearchBar onSearch={handleSearch}/>
      <WeatherDisplay weatherData={weatherData} />
      <Forecast forecastData={forecastData} />
    </div>
  );
};

export default MainWeatherApp;
