document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("help");
  window.addEventListener("scroll", function () {
    let scrollPositionFooter = window.scrollY;
    console.log(scrollPositionFooter);

    //Изменение положения
    container.style.transform = `translateY(${Math.max(
      0,
      scrollPositionFooter * 0.2 - 2000
    )}px)`;
  });
});
