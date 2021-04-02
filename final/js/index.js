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
  
  const apifURL = "https://api.openweathermap.org/data/2.5/forecast?id=5586437&appid=cd74f180fdef1030c4c735b5fcd2b152&units=imperial";
  fetch(apifURL)
    .then((response) => response.json())
    .then((weatherinfo) => {
      //Once it comes back, display it to the console.
      console.log(weatherinfo);
  
       //let mylist = weatherInfo.list;
       let forecastDayNumber = todayDayNumber;
       console.log(forecastDayNumber);
  
       let mylist = weatherinfo.list;
       console.log(mylist.length);
  
  for(i = 0; i<30;i++){
          var time = mylist [i].dt_txt;

          if (time.includes("18:00:00")) {
            console.log(
              "Found an entry with 18:00:00 in the time. It was report " +
                i +
                " from the mylist of 40"
            );
  
          forecastDayNumber += 1;
          if (forecastDayNumber === 7) {
            forecastDayNumber = 0;
          }
  
          let theDayName = document.createElement("span");
              theDayName.textContent = weekday[forecastDayNumber];
              console.log(">"+weekday[forecastDayNumber])
  
              var cakeBatter =3;
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

  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5586437&appid=cd74f180fdef1030c4c735b5fcd2b152&units=imperial";
  fetch(apiURL)
   .then((response) => response.json())
   .then((weatherinfo) => {
     //Once it comes back, display it to the console.
     console.log(weatherinfo);
     
     document.getElementById('place').innerHTML=weatherinfo.name;
     let current = `${weatherinfo.weather[0].description}, ${weatherinfo.main.temp}`;
     document.getElementById("current").innerHTML = current.replace(/^\w/, (c) =>
       c.toUpperCase()
     );
     document.getElementById('highTemp').innerHTML=weatherinfo.main.temp_max;
     document.getElementById('windSpeed').innerHTML=weatherinfo.wind.speed;
     document.getElementById("humid").innerHTML = weatherinfo.main.humidity;
  ;
 
  /*s = wind speed t = temperature*/
  const s = weatherinfo.wind.speed;
  const t = weatherinfo.main.temp;
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
 
 
 function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}