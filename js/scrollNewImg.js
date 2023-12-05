document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("new-container");
  let products = document.querySelectorAll(".product-container");
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition <= 970) {
      //Изменение положения
      container.style.transform = `translateY(${Math.max(
        0,
        scrollPosition * 0.5 - 450
      )}px)`;
    }
    products.forEach((product) => {
      let distanceFromTop = product.offsetTop - window.innerHeight;
      let opacity =
        0.7 -
        (1.5 -
          (scrollPosition - distanceFromTop) / (window.innerHeight / 2) / 3);

      product.style.opacity = Math.max(0, opacity);
    });
  });
});
