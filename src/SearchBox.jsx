import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;
    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            minTemp: jsonResponse.main.temp_min,
            maxTemp: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
    }
    let handleCity = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setErr(false);
        } catch(err) {
            setErr(true);
        }
    }
    return (
    <div className='SearchBox'>
        <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleCity}/>
            <br /><br /><br />
            <Button variant="contained" type='submit'>search</Button>
            {err && <p style={{color: "red"}}>Place not found in our database!</p>}
        </form>
        <br />
    </div>)
}