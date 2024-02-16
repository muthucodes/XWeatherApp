// import logo from "./logo.svg";
import axios from 'axios';
import "./App.css";
import WeatherDetails from "./WeatherDetails";
import React, { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          `https://api.weatherapi.com/v1/current.json?key=6a5c41004765499986d124223232610&q=${city}&aqi=no`
        );
        // const data = await response.json();
        console.log(response.data);
        setWeatherData(response.data);
      } catch (error) {
        // console.log(weatherData);
        console.log(error);
        alert("Failed to fetch weather data");
      }
    };
    // console.log('useEffect running', city);
    if(city){
      fetchData();
    }
  },[city]);
  
  

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.cityName.value);
    setCity(e.target.cityName.value);
  };

  return (
    <div className="App">
      <h1>Weather Details of Cities</h1>
      <form
        onSubmit={(e) => {
          return submitHandler(e);
        }}
      >
        <input type="text" name="cityName" placeholder="Enter city name" />
        <button>Search</button>
      </form>
      {/* {weatherData ? <p>Weather Data available</p> : <p>Weather Data not available</p> } */}
      {city && (weatherData ? (
        <WeatherDetails
          temperature={weatherData.current.temp_c}
          humidity={weatherData.current.humidity}
          condition={weatherData.current.condition.text}
          windSpeed={weatherData.current.wind_kph}
        />
      ): <p>Loading data...</p>)}
    </div>
  );
}

export default App;
