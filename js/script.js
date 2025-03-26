document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the raw GitHub URL
    fetch('https://raw.githubusercontent.com/gurjot017/JS-Assignment4/main/data.json')
      .then(response => response.json())  // Parse the JSON response
      .then(data => {
        const container = document.getElementById('product-container');
        data.forEach(item => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('product');  // Add a CSS class for styling
  
          // Build HTML structure with product information
          productDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Brand: ${item.brand}</p>
            <img src="${item.image}" alt="${item.name}" width="200">  <!-- Display image with width -->
          `;
  
          // Append product div to the container
          container.appendChild(productDiv);
        });
      })
      .catch(error => console.error('Error fetching data:', error));  // Handle errors
  });
  