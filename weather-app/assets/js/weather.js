// User location search
async function doSearch(event) {
  // Prevent refresh
  event.preventDefault();
  // Grab users search query straight from search box
  const search = document.getElementById('searchBox').value;
  // If no search was entered on submit, do something
  if (!search) {
    console.log('Please enter a city name.');
    return;
  }
  // Build API call url from user search
  const endpoint = new URL(`http://api.openweathermap.org/geo/1.0/direct?q=${ search }&limit=1&appid=97da4e49080576a7d29b10e6a27ba3fa`);
  // Make API call with the url built
  const response = await fetch(endpoint);
  // If call fails, do something
  if (response.status === 404) {
    console.log('City not found.');
    return;
  }
  // Grab the response from the API and make it useable
  const data = await response.json();
  // Update HTML elements with data
  const name = document.getElementById('city');
  console.log(data);
  name.innerHTML = data[0].name;
}