const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cd74f180fdef1030c4c735b5fcd2b152&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);

     //let mylist = weatherInfo.list;
     let forecastDayNumber = todayDayNumber;
     console.log(forecastDayNumber);

for(i = 0; i<MediaQueryList.length;i++){
        var time = mylist [i].dt_txt;
        if (time.includes("21:00:00")){

        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }

        let theDayName = document.createElement("span");
            theDayName.textContent = weekday[forecastDayNumber];
            console.log(">"+weekday[forecastDayNumber])

            let theTemp = document.createElement("p");
            theTemp.textContent = weatherinfo.list[i].main.temp + "\xB0";

            let iconcode=
            weatherinfo.list[i].weather[0].icon;
            let iconPath = "http://openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img")
            theIcon.src=iconPath;

            let theDay = document.createElement("div");

            theDay.append(theDayName);
            theDay.append(theIcon);
            theDay.append(theTemp);
    
            document.getElementById("forecastDays").append(theDay);

        
      }
    }
  });

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