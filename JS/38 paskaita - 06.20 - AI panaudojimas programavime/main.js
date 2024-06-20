fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.querySelector('#products');
    productsContainer.innerHTML = ''; // Clear existing content

    data.forEach(product => {
      const card = createProductCard(product);

      productsContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching products:', error));

const form = document.querySelector('#productForm');

form.addEventListener('submit', async event => {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const formData = new FormData(form);
  console.log(formData);
  const productData = {};
  formData.forEach((value, key) => productData[key] = value);
  productData.inStock = productData.inStock === 'on'; // Convert the string to a boolean
  // productData.id = Date.now().toString(); // Generate a unique ID
  console.log(productData);

  // Send the data to the server
  await fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    productData.id = data.id;
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  // Create a new card (assuming productData contains name, category, price, inStock, imageUrl)
  const newCard = createProductCard(productData);
  // Append the new card to the products div
  document.querySelector('#products').appendChild(newCard);

  form.reset(); // Clear the form
});

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  // card.setAttribute('data-id', product.id); // Assuming product has an id

  const img = document.createElement('img');
  img.src = product.imageUrl;
  img.alt = product.name;
  card.appendChild(img);

  const name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);

  const category = document.createElement('p');
  category.textContent = `Category: ${product.category}`;
  card.appendChild(category);

  const price = document.createElement('p');
  price.textContent = `Price: $${product.price}`;
  card.appendChild(price);

  const stock = document.createElement('p');
  stock.textContent = product.inStock ? 'In Stock' : 'Out of Stock';
  card.appendChild(stock);

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    // Send DELETE request to server
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        // Remove card from DOM
        card.remove();
      }
    })
    .catch(error => console.error('Error:', error));
  };
  card.appendChild(deleteBtn);

  return card;
}