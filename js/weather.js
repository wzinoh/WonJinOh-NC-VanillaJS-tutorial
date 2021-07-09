const API_KEY = "1b18c9599037e8e1da5832ee06e5c86d";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=METRIC`;
  fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather .weather-status span");
      const city = document.querySelector("#weather .weather-temp-loc span");
      weather.innerText = `${data.weather[0].main}`;
      city.innerText = `${Math.round(data.main.temp)} ℃ @ ${data.name}`;
    });

  console.log(weatherURL);
}

function onGeoFail() {
  console.log("We can't find you so we cannot give you the weather");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
