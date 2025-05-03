const cityElement = document.getElementById("search");
const rajya = document.getElementById("rajya");
const temperatureElement = document.getElementById("temp");
const conditionsElement = document.querySelector("h4");
const humidityElement = document.getElementById("h2");
// const weatherImage = document.getElementById("image");

let previousData = null;

cityElement.addEventListener("change", (e) => {
  const selectedCity = e.target.value;
  const API_KEY = "40a3fc516f8e84dda853da4789c6d034";
  const city = selectedCity;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather is not found");
      }
      return response.json();
    })
    .then((data) => {
      console.log(`Weather in ${city}:`);
      console.log(`Temperature: ${data.main.temp}°C`);
      console.log(`Conditions: ${data.weather[0].description}`);
      console.log(`Humidity: ${data.main.humidity}%`);

      // Store previous data
      if (previousData) {
        console.log("Previous Data:");
        console.log(`City: ${previousData.name}`);
        console.log(`Temperature: ${previousData.main.temp}°C`);
        console.log(`Conditions: ${previousData.weather[0].description}`);
        console.log(`Humidity: ${previousData.main.humidity}%`);
      }

      // Update previous data
      previousData = data;

      // Update the HTML elements
      rajya.textContent = `State: ${selectedCity}`;
      temperatureElement.textContent = `Temp: ${data.main.temp}°C`;
      conditionsElement.textContent = data.weather[0].description;
      humidityElement.textContent = `Humidity: ${data.main.humidity}%`;

      // const weatherIcon = data.weather[0].icon;
      // const weatherImageUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      // weatherImage.src = weatherImageUrl;
      // weatherImage.alt = data.weather[0].description;

      // const weatherCondition = data.weather[0].main;
      // console.log("Weather Condition:", weatherCondition);

      // if (weatherCondition === "Clouds") {
      //   weatherImage.src = "https://via.placeholder.com/100x100?text=Clouds"; // replace with your cloud image URL
      //   console.log("Image updated to cloud image");
      // } else if (weatherCondition === "Clear") {
      //   weatherImage.src = "https://via.placeholder.com/100x100?text=Clear"; // replace with your sun image URL
      //   console.log("Image updated to sun image");
      // } else {
      //   console.log("Image not updated");
      // }
    })
    .catch((error) => {
      // Log any errors to the console
      console.error("Error fetching weather", error);
    });
});
