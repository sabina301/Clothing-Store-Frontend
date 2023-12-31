let cartItem = [
  ["img/cl7.jpg", "Куртка", "44", 5100],
  ["img/cl5.jpg", "Кофта", "46", 2000],
  ["img/cl8.jpg", "Футболка", "44", 900],
];
let summa = document.createElement("p");
summa.classList.add("summa");

function displayCartItems() {
  let cartContainer = document.querySelector(".cont");
  let totalSumm = 0;
  cartItem.forEach((item) => {
    let productContainer = document.createElement("div");
    productContainer.classList.add("product-container");

    //INSCRIPTION
    let inscriptions = document.createElement("div");
    inscriptions.classList.add("inscriptions");

    let itemName = document.createElement("p");
    itemName.textContent = item[1];
    itemName.classList.add("inscriptions-text");
    let itemSize = document.createElement("p");
    itemSize.textContent = "Размер: " + item[2];
    itemSize.classList.add("inscriptions-text");
    let itemPrice = document.createElement("p");
    itemPrice.textContent = item[3] + "р";
    itemPrice.classList.add("inscriptions-text");
    totalSumm += item[3];

    //CROSS
    let crossContainer = document.createElement("div");
    crossContainer.classList.add("cross-container");

    let background2 = document.createElement("div");
    background2.classList.add("background");

    let cross = document.createElement("img");
    cross.classList.add("cross");
    cross.src = "img/cross.png";

    crossContainer.addEventListener("click", function () {
      let index = Array.from(this.parentNode.parentNode.children).indexOf(
        this.parentNode
      );
      cartItem.splice(index, 1);
      this.parentNode.remove();
      totalSumm -= item[3] * quantity;
      summa.textContent = "Итоговая сумма: " + totalSumm + "р";
    });

    //IMG
    let itemImg = document.createElement("img");
    itemImg.src = item[0];
    itemImg.classList.add("img-for-product");

    //COUNTER
    let counterContainer = document.createElement("div");
    counterContainer.classList.add("counter-container");

    let minusContainer = document.createElement("div");
    minusContainer.classList.add("minus-container");

    let plusContainer = document.createElement("div");
    plusContainer.classList.add("plus-container");

    let minus = document.createElement("img");
    minus.src = "img/minus.png";
    minus.classList.add("minus");

    let plus = document.createElement("img");
    plus.src = "img/cross.png";
    plus.classList.add("plus");

    let num = document.createElement("p");
    num.classList.add("num");
    num.textContent = 1;

    let quantity = 1;

    minusContainer.addEventListener("click", function () {
      if (quantity > 1) {
        quantity--;
        num.textContent = quantity;
        totalSumm -= item[3];
        summa.textContent = "Итоговая сумма: " + totalSumm + "р";
      }
      if (quantity == 1) {
        minusContainer.style.backgroundColor = "gray";
      } else {
        minusContainer.style.backgroundColor = "white";
      }
    });

    plusContainer.addEventListener("click", function () {
      quantity++;
      totalSumm += item[3];
      summa.textContent = "Итоговая сумма: " + totalSumm + "р";
      num.textContent = quantity;
      if (quantity == 1) {
        minusContainer.style.backgroundColor = "gray";
      } else {
        minusContainer.style.backgroundColor = "white";
      }
    });

    //__________________________________________________//

    inscriptions.appendChild(itemName);
    inscriptions.appendChild(itemSize);
    inscriptions.appendChild(itemPrice);

    background2.appendChild(cross);
    crossContainer.appendChild(background2);

    plusContainer.appendChild(plus);
    counterContainer.appendChild(num);
    minusContainer.appendChild(minus);

    counterContainer.appendChild(plusContainer);
    counterContainer.appendChild(minusContainer);

    productContainer.appendChild(itemImg);
    productContainer.appendChild(inscriptions);
    productContainer.appendChild(crossContainer);
    productContainer.appendChild(counterContainer);
    cartContainer.appendChild(productContainer);
  });
  //SUMMA
  summa.textContent = "Итоговая сумма: " + totalSumm + "р";
  cartContainer.appendChild(summa);
}

displayCartItems();
