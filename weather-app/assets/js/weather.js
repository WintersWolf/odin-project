doSearch('http://api.openweathermap.org/data/2.5/weather?q=Brisbane&units=metric&appid=97da4e49080576a7d29b10e6a27ba3fa');

// User location search
function userSearch(event) {
  // Prevent refresh
  event.preventDefault();
  // Grab users search query straight from search box
  const search = document.getElementById('searchBox').value;

  // Build API call url from user search
  const endpoint = new URL(`http://api.openweathermap.org/data/2.5/weather?q=${ search }&units=metric&appid=97da4e49080576a7d29b10e6a27ba3fa`);
  doSearch(endpoint);
}

async function doSearch(endpoint) {

  // Make API call with the url built in userSearch()
  const response = await fetch(endpoint);
  // If call fails, do something
  if (response.status === 404) {
    console.log('City not found.');
    return;
  }
  // Grab the response from the API and make it useable
  const data = await response.json();
  // Update HTML elements with data
  const currentIcon = document.getElementById('current_icon');
  const temp = document.getElementById('temp');
  const name = document.getElementById('city');
  const weather = document.getElementById('weather');
  const sunrise = document.getElementById('sunrise');
  const sunset = document.getElementById('sunset');
  const pressure = document.getElementById('pressure');
  const humidity = document.getElementById('humidity');
  const wind = document.getElementById('wind');
  console.log(data);
  const offset = data.timezone;
  const sunriseTime = data.sys.sunrise;
  const getSunrise = await getTime(sunriseTime);
  const sunsetTime = data.sys.sunset;
  const getSunset = await getTime(sunsetTime);
  currentIcon.src = "./assets/icons/" + data.weather[0].main + ".png";
  temp.innerHTML = parseInt(data.main.temp);
  name.innerHTML = data.name;
  weather.innerHTML = data.weather[0].description;
  sunrise.innerHTML = getSunrise;
  sunset.innerHTML = getSunset;
  pressure.innerHTML = data.main.pressure;
  humidity.innerHTML = data.main.humidity;
  wind.innerHTML = data.wind.speed;
}

async function getTime(unixtime) {
  const time = new Date(unixtime).toLocaleTimeString(undefined,
    {
      hour: '2-digit',
      minute: '2-digit'
    });
  return time;
}

