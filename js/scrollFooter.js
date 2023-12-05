document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("help");
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    //Изменение положения
    container.style.transform = `translateY(${Math.max(
      0,
      scrollPosition * 0.8 - 3100
    )}px)`;
  });
});
