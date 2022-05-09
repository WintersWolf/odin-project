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
  const feels = document.getElementById('feels');
  const feelsSymbol = document.getElementById('feels_symbol');
  const pressure = document.getElementById('pressure');
  const humidity = document.getElementById('humidity');
  const wind = document.getElementById('wind');
  const speed = document.getElementById('speed');
  const cover = document.getElementById('cover');
  //const sunrise = document.getElementById('sunrise');
  //const sunset = document.getElementById('sunset');
  //const sunriseTime = data.sys.sunrise;
  //const getSunrise = await getTime(sunriseTime);
  //const sunsetTime = data.sys.sunset;
  //const getSunset = await getTime(sunsetTime);

  // Give data from search to location div elements
  currentIcon.src = "./assets/icons/" + data.weather[0].main + ".png";
  temp.innerHTML = parseInt(data.main.temp);
  
  if ( unit == 'metric' ) {
    weatherSymbol.innerHTML = '°C';
    lowSymbol.innerHTML = '°C';
    highSymbol.innerHTML = '°C';
    feelsSymbol.innerHTML = '°C';
    speed.innerHTML = 'kmph';
  } else if ( unit == 'imperial' ) {
    weatherSymbol.innerHTML = '°F';
    lowSymbol.innerHTML = '°F';
    highSymbol.innerHTML = '°F';
    feelsSymbol.innerHTML = '°F';
    speed.innerHTML = 'mph';
  }

  name.innerHTML = data.name;
  weather.innerHTML = data.weather[0].description;
  low.innerHTML = parseInt(data.main.temp_min);
  high.innerHTML = parseInt(data.main.temp_max);

  // Give data from search to location_stats div elements
  feels.innerHTML = parseInt(data.main.feels_like);
  pressure.innerHTML = data.main.pressure;
  humidity.innerHTML = data.main.humidity;
  wind.innerHTML = parseInt(data.wind.speed * 3.6);
  cover.innerHTML = data.clouds.all;
  //sunrise.innerHTML = getSunrise.substring(0,5);
  //sunset.innerHTML = getSunset.substring(0,5);
  //console.log(data);

  // Make hourly forecast API call
  let lat = data.coord.lat;
  let lon = data.coord.lon;
  getForecast(lat, lon);

}

// Re-do current location search
function redoSearch() {
  const endpoint = new URL(`http://api.openweathermap.org/data/2.5/weather?q=${ currentLocation }&units=${ unit }&appid=97da4e49080576a7d29b10e6a27ba3fa`);
  doSearch(endpoint);
}

async function getForecast(lat, lon) {
  const forecast = new URL(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${ unit }&appid=97da4e49080576a7d29b10e6a27ba3fa`);
  const response = await fetch(forecast);
  const data = await response.json();
  //console.log(data);
  // Get forecast icons
  const day1img = document.getElementById('day1-icon');
  const day2img = document.getElementById('day2-icon');
  const day3img = document.getElementById('day3-icon');
  const day4img = document.getElementById('day4-icon');
  const day5img = document.getElementById('day5-icon');
  const day6img = document.getElementById('day6-icon');
  const day7img = document.getElementById('day7-icon');

  // Get forecast lows & highs

  const day1low = document.getElementById('day1-low');
  const day2low = document.getElementById('day2-low');
  const day3low = document.getElementById('day3-low');
  const day4low = document.getElementById('day4-low');
  const day5low = document.getElementById('day5-low');
  const day6low = document.getElementById('day6-low');
  const day7low = document.getElementById('day7-low');
  
  const day1high = document.getElementById('day1-high');
  const day2high = document.getElementById('day2-high');
  const day3high = document.getElementById('day3-high');
  const day4high = document.getElementById('day4-high');
  const day5high = document.getElementById('day5-high');
  const day6high= document.getElementById('day6-high');
  const day7high= document.getElementById('day7-high');

  // Get forecast description
  const day1desc = document.getElementById('day1-desc');
  const day2desc = document.getElementById('day2-desc');
  const day3desc = document.getElementById('day3-desc');
  const day4desc = document.getElementById('day4-desc');
  const day5desc = document.getElementById('day5-desc');
  const day6desc = document.getElementById('day6-desc');
  const day7desc = document.getElementById('day7-desc');

  // Get forecast days

  const day1text = document.getElementById('day1-text');
  const day2text = document.getElementById('day2-text');
  const day3text = document.getElementById('day3-text');
  const day4text = document.getElementById('day4-text');
  const day5text = document.getElementById('day5-text');
  const day6text = document.getElementById('day6-text');
  const day7text = document.getElementById('day7-text');

  // Set icons
  day1img.src = "./assets/icons/" + data.daily[0].weather[0].main + ".png";
  day2img.src = "./assets/icons/" + data.daily[1].weather[0].main + ".png";
  day3img.src = "./assets/icons/" + data.daily[2].weather[0].main + ".png";
  day4img.src = "./assets/icons/" + data.daily[3].weather[0].main + ".png";
  day5img.src = "./assets/icons/" + data.daily[4].weather[0].main + ".png";
  day6img.src = "./assets/icons/" + data.daily[5].weather[0].main + ".png";
  day7img.src = "./assets/icons/" + data.daily[6].weather[0].main + ".png";

  // Set lows & highs

  day1low.innerHTML = parseInt(data.daily[0].temp.min);
  day2low.innerHTML = parseInt(data.daily[1].temp.min);
  day3low.innerHTML = parseInt(data.daily[2].temp.min);
  day4low.innerHTML = parseInt(data.daily[3].temp.min);
  day5low.innerHTML = parseInt(data.daily[4].temp.min);
  day6low.innerHTML = parseInt(data.daily[5].temp.min);
  day7low.innerHTML = parseInt(data.daily[6].temp.min);

  day1high.innerHTML = parseInt(data.daily[0].temp.max);
  day2high.innerHTML = parseInt(data.daily[1].temp.max);
  day3high.innerHTML = parseInt(data.daily[2].temp.max);
  day4high.innerHTML = parseInt(data.daily[3].temp.max);
  day5high.innerHTML = parseInt(data.daily[4].temp.max);
  day6high.innerHTML = parseInt(data.daily[5].temp.max);
  day7high.innerHTML = parseInt(data.daily[6].temp.max);

  // Set description

  day1desc.innerHTML = data.daily[0].weather[0].main;
  day2desc.innerHTML = data.daily[1].weather[0].main;
  day3desc.innerHTML = data.daily[2].weather[0].main;
  day4desc.innerHTML = data.daily[3].weather[0].main;
  day5desc.innerHTML = data.daily[4].weather[0].main;
  day6desc.innerHTML = data.daily[5].weather[0].main;
  day7desc.innerHTML = data.daily[6].weather[0].main;

  // Set Day
  const day1time = data.daily[0].dt;
  day1text.innerHTML = await (await getDate(day1time)).substring(0, 3);
  const day2time = data.daily[1].dt;
  day2text.innerHTML = await (await getDate(day2time)).substring(0, 3);
  const day3time = data.daily[2].dt;
  day3text.innerHTML = await (await getDate(day3time)).substring(0, 3);
  const day4time = data.daily[3].dt;
  day4text.innerHTML = await (await getDate(day4time)).substring(0, 3);
  const day5time = data.daily[4].dt;
  day5text.innerHTML = await (await getDate(day5time)).substring(0, 3);
  const day6time = data.daily[5].dt;
  day6text.innerHTML = await (await getDate(day6time)).substring(0, 3);
  const day7time = data.daily[6].dt;
  day7text.innerHTML = await (await getDate(day7time)).substring(0, 3);
  
}

// Convert unix time to readable time
async function getTime(unixtime) {
  const time = new Date(unixtime * 1000).toTimeString();
  return time;
}

// Convert unix time to readable date
async function getDate(unixtime) {
  const time = new Date(unixtime * 1000).toDateString();
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
