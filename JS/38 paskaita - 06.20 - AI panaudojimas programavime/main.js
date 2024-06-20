fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.querySelector('#products');
    productsContainer.innerHTML = ''; // Clear existing content

    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const img = document.createElement('img');
      img.src = product.imageUrl;
      img.alt = product.name;
      img.style.width = '100%';
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

      productsContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching products:', error));