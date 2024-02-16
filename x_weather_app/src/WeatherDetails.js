import './WeatherDetails.css';

export default function WeatherDetails({temperature, humidity, condition, windSpeed}){
    return(<>
    <div className='row'>

    
        <div className='weather-card'>
            <p className="parameter">Temperature</p>
            <p>{temperature}℃</p>
        </div>
        <div className='weather-card'>
            <p className="parameter">Humidity</p>
            <p>{humidity}%</p>
        </div>
        <div className='weather-card'>
            <p className="parameter">Condition</p>
            <p>{condition}</p>
        </div>
        <div className='weather-card'>
            <p className="parameter">Wind Speed</p>
            <p>{windSpeed} kph</p>
        </div>
        </div>
    </>)
}