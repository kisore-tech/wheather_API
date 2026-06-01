import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";



export default function SearchBox({updateInfo}) {
  
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;; 
    let [city, setCity] = useState("");
    let [error,seterror]=useState(false);

    let getWeatherInfo = async () => {

        try{
            let response = await fetch(
                    `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
                    );
                    let jsonResponse = await response.json();
                    console.log(jsonResponse);
                    let result = {
                    city: jsonResponse.name,   
                    temp: jsonResponse.main.temp,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelsLike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description,
                    };

                    console.log(result);
                    return result;
                    
        }catch(err){
            throw err;
        }

    };



    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            let newinfo=await getWeatherInfo();
            updateInfo(newinfo);
            setCity("");
        }catch(err){
           seterror(true);
        }
        
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px"
            }}
        >
            <h2 style={{ marginBottom: "20px" }}>
                🌤️ Search For Weather
            </h2>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    width: "300px"
                }}
            >
                <TextField
                    id="city"
                    label="Enter City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    fullWidth
                />

                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        padding: "10px",
                        fontWeight: "bold"
                    }}
                >
                    Search
                </Button>
                {error && <p>No such Place exists</p>}
            </form>
        </div>
    );
}