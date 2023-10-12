"use-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faSnowflake,
    faCloud,
    faUmbrella, 
    faSun,
    faCloudBolt,
    faSmog,
} from "@fortawesome/free-solid-svg-icons"


const WeatherIcon = ({weatherType}) => {
    switch(weatherType){
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud} fade />;
        case "Drizzle":
        case "Rain":
            return <FontAwesomeIcon icon={faUmbrella} fade />;
        case "Snow":
            return <FontAwesomeIcon icon={faSnowflake} fade />;
        case "Clear":
            return <FontAwesomeIcon icon={faSun} fade />;
        case "Mist":
        case "Haze":
            return <FontAwesomeIcon icon={faSmog} fade />;
        case "Thunderstorm":
            return <FontAwesomeIcon icon={faCloudBolt} fade />;
        default:
            return <div>What</div>
    }

};

export default WeatherIcon;