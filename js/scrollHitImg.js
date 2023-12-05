document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("hit-container");
  let products = document.querySelectorAll(".product-container2");
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition <= 2050) {
      //Изменение положения
      container.style.transform = `translateY(${Math.max(
        0,
        scrollPosition * 0.5 - 1000
      )}px)`;
    }

    products.forEach((product) => {
      let distanceFromTop2 = product.offsetTop - window.innerHeight;
      let opacity2 =
        (scrollPosition - distanceFromTop2) / (window.innerHeight / 2) / 5 -
        0.6;
      product.style.opacity = Math.max(0, opacity2);
    });
  });
});
