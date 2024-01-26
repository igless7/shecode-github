function displayWeather(response){
    let currentTemp = Math.round(response.data.temperature.current);
    let temperature = document.querySelector("#current-temperature-value");
    temperature.innerHTML = currentTemp;
    let currentHum = response.data.temperature.humidity;
    let humidityPercentage = document.querySelector("#humidity-value");
    humidityPercentage.innerHTML = (`${currentHum}%`);
    let currentWind = response.data.wind.speed;
    let windPercentage = document.querySelector("#wind-value");
    windPercentage.innerHTML = (`${currentWind}km/h`);
}

function searchCity(event){
    event.preventDefault();
    let search = document.querySelector("#search-input");
    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = search.value;
    let city = search.value;
    let apiKey = "58ce410f0od07a6a15e649f48tfbd393";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather); 
    console.log(apiUrl);
}

function formatDate (date){
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    if (minutes<10){
        minutes = `0${minutes}`;
    }
    if (hours<10){
        hours = `0${hours}`;
    }
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`
}

let now = new Date();
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = formatDate(now);



let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity)