import WeatherCard from "@/app/components/WeatherCard";
import "../app/globals.css";

export async function getStaticProps(){
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Italy&appid=${process.env.WEATHER_APP_API_KEY}&units=imperial`
    );
    const weatherData = await res.json();

    return {
        props: {
            weatherData,
        },
    };
}

export default function Home({weatherData}) {
    console.log(weatherData);
    return (
        <main>
            <h1> Weather App </h1>
            <WeatherCard cityName = {weatherData.name}
                         weatherType = {weatherData.weather[0].main}
                         weatherDescription = {weatherData.weather[0].description}
                         currentTemperature = {weatherData.main.temp}
                         feelsLike = {weatherData.main.feels_like}
                         highTemperature = {weatherData.main.temp_max}
                         lowTemperature = {weatherData.main.temp_min}/>
        </main>
    )
}