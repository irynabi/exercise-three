"use-client";
import styles from "./WeatherCard.module.css"
const WeatherCard = ({cityName, weatherType, weatherDescription, currentTemperature, feelsLike, highTemperature, lowTemperature, cloudiness, humidity, windSpeed}) => (
<div>
    <div className = {styles.WeatherCardWrapper}>
    <h2>{cityName}</h2>
    <p>Weather Type: {weatherType}</p>
    <p>Weather Description: {weatherDescription}</p>
    <p>Current Temperature: {currentTemperature} </p>
    <p>Feels Like: {feelsLike} </p>
    <p>High Temperature: {highTemperature} </p>
    <p>Low Temperature: {lowTemperature} </p>
    <p>Cloudiness: {cloudiness}</p>
    <p>Humidity: {humidity}</p>
    <p>Wind Speed: {windSpeed}</p>
    </div>
</div>
)

export default WeatherCard;