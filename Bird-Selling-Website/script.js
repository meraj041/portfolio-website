const birds = [
    { name: "Parrot", price: 1500, img: "photo-1552728089-57bdde30beb3.avif" },
    { name: "Budgie", price: 800, img: "photo-1555169062-013468b47731.avif" },
    { name: "BlueParrot", price: 1200, img: "photo-1445820200644-69f87d946277.avif" },
    { name: "Penguen", price: 2000, img: "photo-1490718720478-364a07a997cd.avif" }
  ];

  let cartCount = 0;

  function renderBirds() {
    const list = document.getElementById('bird-list');
    birds.forEach((bird, index) => {
      const card = document.createElement('div');
      card.className = 'bird-card';
      card.innerHTML = `
        <img src="${bird.img}" alt="${bird.name}">
        <h2>${bird.name}</h2>
        <p>Price: ৳${bird.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      `;
      list.appendChild(card);
    });
  }

  function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
  }

  renderBirds();