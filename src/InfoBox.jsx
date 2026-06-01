import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function InfoBox({info}) {
 
    let getWeatherImage = (weather) => {
    if (weather.includes("cloud")) return "https://images.unsplash.com/photo-1499346030926-9a72daac6c63";
    if (weather.includes("rain")) return "https://images.unsplash.com/photo-1501594907352-04cda38ebc29";
    if (weather.includes("thunderstorm")) return "https://images.unsplash.com/photo-1500673922987-e212871fec22";
    if (weather.includes("snow")) return "https://images.unsplash.com/photo-1608889175123-8ee362201f81";
    if (weather.includes("haze") || weather.includes("mist") || weather.includes("fog"))
        return "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227";
    
    return "https://images.unsplash.com/photo-1502082553048-f009c37129b9"; // default sunny
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh",
                px: 2,
                marginTop:"20px",
            }}
        >
            <Card
                sx={{
                    width: "100%",
                    maxWidth: 500,
                    borderRadius: "16px",
                    boxShadow: 5,
                    overflow: "hidden"
                }}
            >
                <CardMedia
                    component="img"
                    height="180"
                    image={getWeatherImage(info.weather.toLowerCase())}
                    alt="weather"
                />

                <CardContent>
                    <Typography variant="h5" gutterBottom align="center">
                     {info.city}
                    </Typography>
                    <Typography variant="h5" gutterBottom align="center">
                        🌤️ {info.weather}
                    </Typography>

                    <Typography align="center" sx={{ fontSize: "28px", fontWeight: "bold" }}>
                        {info.temp}°C
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                        <Typography>🔻 Min Temp: {info.tempMin}°C</Typography>
                        <Typography>🔺 Max Temp: {info.tempMax}°C</Typography>
                        <Typography>💧 Humidity: {info.humidity}%</Typography>
                        <Typography>🤔 Feels Like: {info.feelsLike}°C</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}