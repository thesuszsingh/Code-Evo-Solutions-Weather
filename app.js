let search = document.querySelector("#search");
let date = document.querySelector("#date");
let time = document.querySelector("#time");
let day = document.querySelector("#day");
let country = document.querySelector("#country");
let name = document.querySelector("#name");
let region = document.querySelector("#region");
let localTime = document.querySelector("#local-time");
let condation = document.querySelector("#conditions");
let condationImage = document.querySelector("#condation-img");
let humidity = document.querySelector("#humiditys");
let heatIndex = document.querySelector("#heat-index");
let feelslike = document.querySelector("#feels-like");
let Preciption = document.querySelector("#Preciption");
let tempreature = document.querySelector("#tempreatures");
let minimumTemp = document.querySelector("#minimum-temp");
let maximumTemp = document.querySelector("#maximum-temp");
let pressure = document.querySelector("#pressure");
let wind = document.querySelector("#winds");
let windDirection = document.querySelector("#wind-direction");
let windChill = document.querySelector("#wind-chill");
let visibility = document.querySelector("#Visiblity");
let weatherIcon = document.querySelector("#weather-icon");



setInterval(function () {
  const curretDate = new Date()
  date.textContent = curretDate.toLocaleDateString();
  time.textContent = curretDate.toLocaleTimeString();
  if
    (curretDate.getDay() === 0) {
    day.textContent = "Sunday";
  } else if (curretDate.getDay() === 1) {
    day.textContent = "Monday";
  } else if (curretDate.getDay() === 2) {
    day.textContent = "Tuesday";
  } else if (curretDate.getDay() === 3) {
    day.textContent = "Wednesday";
  } else if (curretDate.getDay() === 4) {
    day.textContent = "Thursday";
  } else if (curretDate.getDay() === 5) {
    day.textContent = "Friday";
  } else if (curretDate.getDay() === 6) {
    day.textContent = "Saturday";
  }
}, 1000)



  search.addEventListener("click", () => {
    const APIKey = '023b5ed1c7f94bd7b12180827242406';
    let city = document.querySelector("#input").value;
    if (city == '')
      return;
    fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        country.innerHTML = `${data.location.country}`;
        name.innerHTML = `${data.location.name}`;
        region.innerHTML = `${data.location.region}`;
        condation.innerHTML = `${data.current.condition.text}`;
        humidity.innerHTML = `${data.current.humidity} %`;
        heatIndex.innerHTML = `${data.current.feelslike_c} °C`;
        feelslike.innerHTML = `${data.current.feelslike_c} °C`;
        Preciption.innerHTML = `${data.current.precip_mm}`;
        tempreature.innerHTML = `${data.current.temp_c} °C`;
        minimumTemp.innerHTML = `${data.current.temp_c} °C`;
        maximumTemp.innerHTML = `${data.current.temp_c} °C`;
        pressure.innerHTML = `${data.current.pressure_mb} in`;
        wind.innerHTML = `${data.current.wind_kph} km/h`;
        windChill.innerHTML = `${data.current.windchill_c} °C`;
        windDirection.innerHTML = `${data.current.wind_dir}`;
        visibility.innerHTML = `${data.current.vis_km} km`;
        weatherIcon.src = `http:${data.current.condition.icon}`;
        console.log(data)
      
      })
  })
