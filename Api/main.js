'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let apiURL = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json"; // API URL

  // Fetch data from the API
  fetch(apiURL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const result = data.Results;
      console.log(result);

      // Call a function to display only the vehicle type name and make name
      displayData(result);
    })
    .catch(error => console.error('Error fetching data:', error));

  // Function to display data on the HTML page
  function displayData(result) {
    // Get the container where you want to display the data
    const container = document.getElementById('apiDataContainer');

    if (!container) {
      console.error('Container not found');
      return;
    }

    result.forEach(item => {
      // Create a div element for each vehicle type
      let vehicleDiv = document.createElement('div');
      vehicleDiv.className = 'vehicleType';

      // Create and append only the vehicle type name (Type)
      let vehicleType = document.createElement('p');
      vehicleType.textContent = `Type: ${item.VehicleTypeName}`;
      vehicleDiv.appendChild(vehicleType);

      // Create and append only the make name (Name)
      let makeName = document.createElement('p');
      makeName.textContent = `Name: ${item.MakeName}`;
      vehicleDiv.appendChild(makeName);

      // Append this div to the container
      container.appendChild(vehicleDiv);
    });
  }
});
