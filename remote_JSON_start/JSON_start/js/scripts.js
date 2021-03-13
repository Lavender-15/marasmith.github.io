//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cd74f180fdef1030c4c735b5fcd2b152&units=imperial";

//Go fetch it and then wait for a response. (zip={idcode},us)
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);
    
    document.getElementById('place').innerHTML=weatherinfo.name;
    document.getElementById('currentTemp').innerHTML=weatherinfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherinfo.wind.speed;

const iconcode = weatherinfo.weather[0].icon;
console.log(iconcode);

const icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);

document.getElementById("weather_icon").src = icon_path;
 }); //end of "then" fat arrow function



