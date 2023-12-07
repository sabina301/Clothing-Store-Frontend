let orderItems = [
  { image: "/img/cl1.jpg", name: "Куртка", price: 5100 },
  { image: "/img/cl2.jpg", name: "Кофта", price: 2000 },
  { image: "/img/cl3.jpg", name: "Футболка", price: 900 },
  { image: "/img/cl4.jpg", name: "Свитшот", price: 1100 },
  { image: "/img/cl5.jpg", name: "Куртка", price: 2000 },
];

let buyItems = [
  { image: "/img/cl1.jpg", name: "Куртка", price: 5100 },
  { image: "/img/cl2.jpg", name: "Кофта", price: 2000 },
  { image: "/img/cl3.jpg", name: "Футболка", price: 900 },
  { image: "/img/cl4.jpg", name: "Свитшот", price: 1100 },
  { image: "/img/cl5.jpg", name: "Куртка", price: 2000 },
];

function displayOrderItem(orderItems) {
  let orderContainer = document.getElementById("order");
  orderContainer.id = "order";
  let imgOrder = document.createElement("img-order");
  imgOrder.id = "img-order";
  orderContainer.appendChild(imgOrder);
  orderItems.forEach((item) => {
    let imgOrderCont = document.createElement("div");
    imgOrderCont.classList.add("img-order-cont");

    let img = document.createElement("img");
    img.src = item.image;

    imgOrderCont.appendChild(img);
    imgOrder.appendChild(imgOrderCont);
  });
}

function displayBuyItem(buyItems) {
  let buyContainer = document.getElementById("buy");
  buyContainer.id = "buy";
  let imgBuy = document.createElement("img-buy");
  imgBuy.id = "img-buy";
  buyContainer.appendChild(imgBuy);
  buyItems.forEach((item) => {
    let imgBuyCont = document.createElement("div");
    imgBuyCont.classList.add("img-buy-cont");

    let img = document.createElement("img");
    img.src = item.image;

    imgBuyCont.appendChild(img);
    imgBuy.appendChild(imgBuyCont);
  });
}

displayOrderItem(orderItems);
displayBuyItem(buyItems);
