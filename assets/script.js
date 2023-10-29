// HW6 api = b5b9d37f78c385c862bf221f6302bf82
const apiKey = "df3fb9934a7d8ebae97c6749b588071a"
//const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}";
const searchInput = document.querySelector("#searchInput")
const todaysWeather = document.querySelector("#weather")


async function searchWeather(cityName) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      console.log(data)
      //  document.querySelector(".day").innerHTML = data.dt_txt.toLocaleString();
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
      document.querySelector(".humidity").innerHTML = Math.floor(data.main.humidity) + " %";
      document.querySelector(".wind").innerHTML = Math.ceil(data.wind.speed) + " km/h";

      //--------------------------------- var currDate =  new Date(fiveDayArray[i].dt_txt).toLocaleString().split(',')[0]; ------------------------------------------------------------------------------     

      const d = new Date();
      const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      function checkDay(day) {
        if (day + d.getDay() > 6) {
          return day + d.getDay() - 7;
        }
        else {
          return day + d.getDay();
        }
      }
      for (var i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1)).innerHTML = weekday[checkDay(i)]
      }

      var lat = data.coord.lat;
      var lon = data.coord.lon;
      // fetch to this next end point https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
        .then(function (response) {
          return response.json()
        }).then(function (data5) {
          console.log(data5);

          for (i = 0; i < 40; i = i + 8) {
            if (i === 0) {
              //document.getElementById("img" +(i+1)).src=" https://openweathermap.org/img/wn/" + data5.list[i].weather[0].icon +".png"   
              document.querySelector(".date1").innerHTML = (data5.list[i].dt_txt).split(" ")[0];
              document.querySelector(".city1").innerHTML = data5.city.name;
              document.querySelector(".temp1").innerHTML = Math.round(data5.list[i].main.temp) + "°F";
              document.querySelector(".humidity1").innerHTML = Math.floor(data5.list[i].main.humidity) + " %";
              document.querySelector(".wind1").innerHTML = Math.round(data5.list[i].wind.speed) + " MPH";
            } else if (i === 8) {
              document.querySelector(".date2").innerHTML = (data5.list[i].dt_txt).split(" ")[0];
              document.querySelector(".city2").innerHTML = data5.city.name;
              document.querySelector(".temp2").innerHTML = Math.round(data5.list[i].main.temp) + "°F";
              document.querySelector(".humidity2").innerHTML = Math.floor(data5.list[i].main.humidity) + " %";
              document.querySelector(".wind2").innerHTML = Math.round(data5.list[i].wind.speed) + " MPH";
            } else if (i === 16) {
              document.querySelector(".date3").innerHTML = (data5.list[i].dt_txt).split(" ")[0];
              document.querySelector(".city3").innerHTML = data5.city.name;
              document.querySelector(".temp3").innerHTML = Math.round(data5.list[i].main.temp) + "°F";
              document.querySelector(".humidity3").innerHTML = Math.floor(data5.list[i].main.humidity) + " %";
              document.querySelector(".wind3").innerHTML = Math.round(data5.list[i].wind.speed) + " MPH";
            } else if (i === 24) {
              document.querySelector(".date4").innerHTML = (data5.list[i].dt_txt).split(" ")[0];
              document.querySelector(".city4").innerHTML = data5.city.name;
              document.querySelector(".temp4").innerHTML = Math.round(data5.list[i].main.temp) + "°F";
              document.querySelector(".humidity4").innerHTML = Math.floor(data5.list[i].main.humidity) + " %";
              document.querySelector(".wind4").innerHTML = Math.round(data5.list[i].wind.speed) + " MPH";
            } else if (i === 32) {
              document.querySelector(".date5").innerHTML = (data5.list[i].dt_txt).split(" ")[0];
              document.querySelector(".city5").innerHTML = data5.city.name;
              document.querySelector(".temp5").innerHTML = Math.round(data5.list[i].main.temp) + "°F";
              document.querySelector(".humidity5").innerHTML = Math.floor(data5.list[i].main.humidity) + " %";
              document.querySelector(".wind5").innerHTML = Math.round(data5.list[i].wind.speed) + " MPH";
            }
            // console.log(data5.city.name)           //city name
            //console.log((data5.list[i].dt_txt)      //date
            // console.log(data5.list[i].main.temp)  //temp
            // console.log(data5.list[i].main.humidity) //humidity
            // console.log(data5.list[i].wind.speed) //wind-speed

          }
        })
      //-------- 5 days card ends here --------
    })
    .catch(err)
  {
    alert("Something went wrong");
  }
}

//-----------------------------------------------------------------------------------------------
const searchButton = document.querySelector("#searchBtn")
searchButton.addEventListener("click", function (event) {
  event.preventDefault()
  const cityName = searchInput.value.trim()
  searchWeather(cityName)
})

