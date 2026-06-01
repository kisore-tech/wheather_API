import { useState } from "react";   
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "EXample_information",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 22.05,
        tempMax: 30.05,
        humidity: 47,
        weather: "Haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <SearchBox updateInfo={updateInfo} />  
            <InfoBox info={weatherInfo} />                  
        </div>
    );
}