import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    let hotImg = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let coldImg = "https://plus.unsplash.com/premium_photo-1668792545377-49e3dc0257f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let rainImg = "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let imgLink = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.city == "Sample City" ? imgLink : info.humidity > 80 ? rainImg : info.temp > 20 ? hotImg : coldImg}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}{info.city !== "Sample City" && (info.humidity > 80 ? <ThunderstormIcon fontSize="small"/> : info.temp > 20 ? <SunnyIcon fontSize="small"/> : <AcUnitIcon fontSize="small"/>)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temperature = {info.minTemp}&deg;C</p>
                    <p>Max Temperature = {info.maxTemp}&deg;C</p>
                    <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}