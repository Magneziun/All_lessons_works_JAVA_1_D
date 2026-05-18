
//P.S сделал корзину чтобы использовать 
//localstorage для интернет магазина как вы рассказывали
//сильно не заморачивался, но думаю можно защитать на доп функцию
//все дз сданы, экзамен загружен
// 10 -> 12 🙏🙏🙏?



const productsContainer = document.getElementById("products");
const cartItemsContainer = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");

let products = [];


let cart = JSON.parse(localStorage.getItem("cart")) || [];


fetch("https://fakestoreapiserver.reactbd.com/walmart")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    showProducts(data);
    showCart();
  });


function showProducts(items) {
  productsContainer.innerHTML = "";

  items.forEach((item) => {
    const oldPrice = Number(item.oldPrice || 0);
    const newPrice = Number(item.price || 0);
    const difference = oldPrice - newPrice;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p><b>Бренд:</b> ${item.brand}</p>
      <p><b>Категория:</b> ${item.category}</p>
      <p><b>Цена:</b> ${item.price}$</p>
      <p><b>Изменение цены:</b> ${difference.toFixed(2)}$</p>
      <p>${item.des}</p>

      <button onclick="addToCart(${item._id})">
        Добавить в корзину
      </button>
    `;

    productsContainer.append(card);
  });
}


function addToCart(id) {
  cart.push(id); 
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}


function showCart() {
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((id) => {
    const product = products.find((item) => item._id === id);

    if (product) {
      total += Number(product.price);

      const div = document.createElement("div");
      div.className = "cart-item";

      div.innerHTML = `
        <p>${product.title}</p>
        <p>${product.price}$</p>
      `;

      cartItemsContainer.append(div);
    }
  });

  totalPriceElement.textContent = total.toFixed(2);
}