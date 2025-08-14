import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Sample City",
        temp: 1,
        minTemp: 2,
        maxTemp: 3,
        humidity: 4,
        feelsLike: 5,
        weather: "haze"
    });
    let updateInfo = (res) => {
        setWeatherInfo(res);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Saurabh Gupta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}