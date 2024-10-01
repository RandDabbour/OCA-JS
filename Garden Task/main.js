'use strict';

// Form handling logic
let formGarden = document.getElementById("formGarden");
formGarden.addEventListener('submit', addGardenInfo);

// Declare array to hold garden info
let gardenArr = [];

// Call table elements
let tableHead = document.getElementById("headCon");
let tableBody = document.getElementById("bodCon");

// Add new garden information
function addGardenInfo(event) {
    event.preventDefault();

    let name = event.target.nameInp.value;
    let image = event.target.selImg.value;
    let season = event.target.sesonInp.value;

    new Garden(name, image, season);
    renderGardenInfo();
    formGarden.reset();  // Clear form after submission
}

// Constructor function to store garden info
function Garden(name, image, season) {
    this.name = name;
    this.image = image;
    this.season = season;

    gardenArr.push(this);
}

// Create table header
function createTableHeader() {
    let tr = document.createElement('tr');
    tableHead.appendChild(tr);

    let th1 = document.createElement('th');
    th1.textContent = 'Name';
    tr.appendChild(th1);

    let th2 = document.createElement('th');
    th2.textContent = 'Image';
    tr.appendChild(th2);

    let th3 = document.createElement('th');
    th3.textContent = 'Season';
    tr.appendChild(th3);

    let th4 = document.createElement('th');
    th4.textContent = 'Edit/Delete';
    tr.appendChild(th4);
}
createTableHeader();  // Call this function to initialize the header

// Render garden information in the table
function renderGardenInfo() {
    tableBody.innerHTML = '';  // Clear the body before rendering
    gardenArr.forEach((garden, index) => {
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);

        let td1 = document.createElement('td');
        td1.textContent = garden.name;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.textContent = garden.image;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.textContent = garden.season;
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        tr.appendChild(td4);

        // Edit button
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'editBtn';
        td4.appendChild(editBtn);

        // Delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.addEventListener('click', () => deleteRow(index));
        td4.appendChild(deleteBtn);
    });
}

// Delete row from the table and gardenArr
function deleteRow(index) {
    gardenArr.splice(index, 1);
    renderGardenInfo();  // Re-render table after deletion
}

// Function to fetch and display products from product.json
function fetchAndDisplayProducts() {
    fetch('product.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  // Parse the JSON
        })
        .then(products => {
            displayProducts(products);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Function to display products
function displayProducts(products) {
    const productsContainer = document.getElementById('productsContainer');

    products.forEach(product => {
        // Create product card container
        let productCard = document.createElement('div');
        productCard.className = 'productCard';

        // Create image element
        let productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;

        // Create title element
        let productTitle = document.createElement('h2');
        productTitle.textContent = product.title;

        // Create description element
        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        // Create price element
        let productPrice = document.createElement('p');
        productPrice.className = 'productPrice';
        productPrice.textContent = `$${product.price}`;

        // Append elements to product card
        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productDescription);
        productCard.appendChild(productPrice);

        // Append product card to container
        productsContainer.appendChild(productCard);
    });
}

// Call the function to fetch and render products
fetchAndDisplayProducts();
