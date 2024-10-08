import { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    if (!city) return alert('Please enter a city name');
    try {
      const geoRes = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=7f7c1ed7f260dffbcb36650c0ce18b2c`);
      if (geoRes.data.length) {
        const { lat, lon } = geoRes.data[0];
        onSearch(lat, lon);
      } else {
        alert('City not found');
      }
    } catch (error) {
      console.error('Error fetching city:', error);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name" 
        className="p-2 border rounded-l-lg outline-none"
      />
      <button 
        onClick={handleSearch} 
        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
