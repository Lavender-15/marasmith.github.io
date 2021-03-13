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

    let current = `${weatherInfo.weather[0].description}, ${weatherInfo.main.temp}`;
    document.getElementById("current").innerHTML = current.replace(/^\w/, (c) =>
      c.toUpperCase()
    );

 /*s = wind speed t = temperature*/
 const s = weatherInfo.wind.speed;
 const t = weatherInfo.main.temp;
 let wc =
   35.74 +
   0.6215 * t -
   35.75 * Math.pow(s, 0.16) +
   0.4275 * t * Math.pow(s, 0.16);
 wc = Math.round(wc);
 if (t <= 50 && s > 3) {
   document.getElementById("chill").textContent = wc + "\xB0" + "F";
 } else {
   document.getElementById("chill").textContent = "N/A";
 }
});


