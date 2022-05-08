// Global settings
let unit = 'metric';
let currentLocation = 'Brisbane';

// Perform default search for Brisbane
doSearch('http://api.openweathermap.org/data/2.5/weather?q=Brisbane&units=metric&appid=97da4e49080576a7d29b10e6a27ba3fa');

// User location search
function userSearch(event) {
  // Prevent refresh
  event.preventDefault();
  // Grab users search query straight from search box
  const search = document.getElementById('searchBox').value;
  // Update current location
  currentLocation = search;
  // Build API call url from user search
  const endpoint = new URL(`http://api.openweathermap.org/data/2.5/weather?q=${ search }&units=${ unit }&appid=97da4e49080576a7d29b10e6a27ba3fa`);
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

  // Get elements from location div
  const currentIcon = document.getElementById('current_icon');
  const temp = document.getElementById('temp');
  const name = document.getElementById('city');
  const weather = document.getElementById('weather');
  const weatherSymbol = document.getElementById('symbol');
  const low = document.getElementById('low');
  const lowSymbol = document.getElementById('lowsymbol');
  const high = document.getElementById('high');
  const highSymbol = document.getElementById('highsymbol');

  // Get elements from location_stats div
  const pressure = document.getElementById('pressure');
  const humidity = document.getElementById('humidity');
  const wind = document.getElementById('wind');
  const speed = document.getElementById('speed');
  const sunrise = document.getElementById('sunrise');
  const sunset = document.getElementById('sunset');
  const sunriseTime = data.sys.sunrise;
  const getSunrise = await getTime(sunriseTime);
  const sunsetTime = data.sys.sunset;
  const getSunset = await getTime(sunsetTime);

  // Give data from search to location div elements
  currentIcon.src = "./assets/icons/" + data.weather[0].main + ".png";
  temp.innerHTML = parseInt(data.main.temp);
  
  if ( unit == 'metric' ) {
    weatherSymbol.innerHTML = '°C';
    lowSymbol.innerHTML = '°C';
    highSymbol.innerHTML = '°C';
    speed.innerHTML = 'kmph';
  } else if ( unit == 'imperial' ) {
    weatherSymbol.innerHTML = '°F';
    lowSymbol.innerHTML = '°F';
    highSymbol.innerHTML = '°F';
    speed.innerHTML = 'mph';
  }

  name.innerHTML = data.name;
  weather.innerHTML = data.weather[0].description;
  low.innerHTML = parseInt(data.main.temp_min);
  high.innerHTML = parseInt(data.main.temp_max);

  // Give data from search to location_stats div elements
  pressure.innerHTML = data.main.pressure;
  humidity.innerHTML = data.main.humidity;
  wind.innerHTML = parseInt(data.wind.speed * 3.6);
  sunrise.innerHTML = getSunrise;
  sunset.innerHTML = getSunset;
  console.log(data);
}

async function getForecast(lat, long) {

}

// Re-do current location search
function redoSearch() {
  const endpoint = new URL(`http://api.openweathermap.org/data/2.5/weather?q=${ currentLocation }&units=${ unit }&appid=97da4e49080576a7d29b10e6a27ba3fa`);
  doSearch(endpoint);
}

// Convert unix time to regular datetime
async function getTime(unixtime) {
  const time = new Date(unixtime * 1000).toLocaleTimeString(undefined,
    {
      hour: '2-digit',
      minute: '2-digit'
    });
  return time;
}

function setUnits() {
  let toggler = document.getElementById('units');

  if (toggler.checked == true) {
    unit = 'imperial';
  } else {
    unit = 'metric';
  }

  redoSearch();
}
