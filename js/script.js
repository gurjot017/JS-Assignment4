document.addEventListener('DOMContentLoaded', () => {
    fetch('https://gurjot017.github.io/JS-Assignment4/data.json')


      .then(response => response.json())  // Parse the JSON response
      .then(data => {
        const container = document.getElementById('product-container');
        data.forEach(item => {
          const productDiv = document.createElement('div');
          productDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Brand: ${item.brand}</p>
            <img src="${item.image}" alt="${item.name}">
          `;
          container.appendChild(productDiv);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  