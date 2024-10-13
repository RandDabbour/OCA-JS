'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = "162f8105eb7f7768b7a0793bb91f6ab8";
    const searchBar = document.getElementById('searchBar');
    const cityGrid = document.getElementById('cityGrid');

    const cities = [
        'Amman',
        'Irbid',
        'Zarqa',
        'Aqaba',
        'Mafraq',
        'Karak',
        'Madaba',
        'Jerash',
        'Tafilah',
        'Ajloun'
    ];

    function displayCities(filteredCities) {
        cityGrid.innerHTML = ''; 
        filteredCities.forEach(city => {
            fetchWeather(city); 
        });
    }

    function fetchWeather(city) {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},jo&appid=${apiKey}&units=metric`;

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                displayError(city);
            });
    }

    function displayWeather(data) {
        const card = document.createElement('div');
        card.className = 'city-card';

        const cityName = document.createElement('h2');
        cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;

        const temperature = document.createElement('p');
        temperature.textContent = `Temperature: ${data.main.temp} °C`;

        const weatherDescription = document.createElement('p');
        weatherDescription.textContent = `Condition: ${data.weather[0].description}`;

        const humidity = document.createElement('p');
        humidity.textContent = `Humidity: ${data.main.humidity}%`;

        const windSpeed = document.createElement('p');
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        card.appendChild(cityName);
        card.appendChild(temperature);
        card.appendChild(weatherDescription);
        card.appendChild(humidity);
        card.appendChild(windSpeed);

        cityGrid.appendChild(card); 
    }

    function displayError(city) {
        const card = document.createElement('div');
        card.className = 'city-card';

        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Weather data for ${city} could not be fetched.`;

        card.appendChild(errorMessage);
        cityGrid.appendChild(card); // Append error card to the grid
    }

    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredCities = cities.filter(city => city.toLowerCase().includes(searchTerm));
        displayCities(filteredCities);
    });

    // Initial display of all cities
    displayCities(cities);
});
