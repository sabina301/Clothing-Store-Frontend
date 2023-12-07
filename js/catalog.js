let catalogItem = [
  { image: "/img/cl1.jpg", name: "Куртка", price: 5100 },
  { image: "/img/cl2.jpg", name: "Кофта", price: 2000 },
  { image: "/img/cl3.jpg", name: "Футболка", price: 900 },
  { image: "/img/cl4.jpg", name: "Свитшот", price: 1100 },
  { image: "/img/cl5.jpg", name: "Куртка", price: 2000 },
  { image: "/img/cl6.jpg", name: "Куртка", price: 2000 },
  { image: "/img/cl7.jpg", name: "Куртка", price: 2000 },
  { image: "/img/cl8.jpg", name: "Куртка", price: 2000 },
];

let catalogItemNow = [];

document.querySelector("button").addEventListener("click", function () {
  let minPrice = parseInt(document.querySelector("input:nth-of-type(1)").value);
  let maxPrice = parseInt(document.querySelector("input:nth-of-type(2)").value);
  catalogItemNow = catalogItem;
  let filteredItems;
  if (minPrice < maxPrice) {
    filteredItems = catalogItemNow.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    displayCatalogItems(filteredItems);
  }
});

// Обработчик события на кнопку "По убыванию"
document.querySelectorAll("button")[1].addEventListener("click", function () {
  catalogItemNow.sort((a, b) => b.price - a.price);
  displayCatalogItems(catalogItemNow);
});

// Обработчик события на кнопку "По возрастанию"
document.querySelectorAll("button")[2].addEventListener("click", function () {
  catalogItemNow.sort((a, b) => a.price - b.price);
  displayCatalogItems(catalogItemNow);
});

function displayCatalogItems(items) {
  let catalogContainer = document.querySelector(".container");
  catalogContainer.innerHTML = "";
  items.forEach((item) => {
    let productContainer = document.createElement("div");
    productContainer.classList.add("product-container");

    let itemName = document.createElement("div");
    itemName.textContent = item.name;
    itemName.classList.add("caption");

    let itemPrice = document.createElement("div");
    itemPrice.textContent = item.price + "р";
    itemPrice.classList.add("caption-price");

    let itemImg = document.createElement("img");
    itemImg.src = item.image;
    itemImg.classList.add("product-img");

    productContainer.appendChild(itemImg);
    productContainer.appendChild(itemName);
    productContainer.appendChild(itemPrice);
    catalogContainer.appendChild(productContainer);
    productContainer.addEventListener("click", function () {
      window.location.href = "product.html";
    });
  });
  catalogItemNow = items;
}
displayCatalogItems(catalogItem);
