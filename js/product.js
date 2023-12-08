let product = {
  name: "Свитшот",
  sale: "799 руб.",
  full: "999 руб.",
  img: "img/cl1.jpg",
  description: "Здесь будет описание товара",
};

function displayProduct(product) {
  let container = document.querySelector(".container");
  let priceContainer = document.getElementById("price-container");
  let imgContainer = document.querySelector(".img-container");

  let img = document.createElement("img");
  img.src = product.img;

  imgContainer.appendChild(img);
  container.appendChild(imgContainer);

  let sale = document.createElement("p");
  sale.textContent = product.sale;
  sale.id = "with-sale";

  let full = document.createElement("p");
  full.textContent = product.full;
  full.id = "without-sale";
}

displayProduct(product);
