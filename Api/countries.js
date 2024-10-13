'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const apiURL2 = "https://restcountries.com/v3.1/all";

  // Fetch data from API
  fetch(apiURL2)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayCountryData(data);
    })
    .catch(error => console.error('Error fetching data from countries API:', error));

  //display country data
  function displayCountryData(countries) {
    const container = document.getElementById('countryDataContainer');

    if (!container) {
      console.error('Container not found');
      return;
    }

    countries.forEach(country => {
      let countryDiv = document.createElement('div');
      countryDiv.className = 'country';

      let flagImg = document.createElement('img');
      flagImg.src = country.flags.svg; 
      flagImg.alt = `${country.name.common} flag`;
      countryDiv.appendChild(flagImg);

      let countryName = document.createElement('p');
      countryName.textContent = `Country: ${country.name.common}`;
      countryDiv.appendChild(countryName);

      let region = document.createElement('p');
      region.textContent = `Region: ${country.region}`;
      countryDiv.appendChild(region);

      // Append this div to the container
      container.appendChild(countryDiv);
    });
  }
});
