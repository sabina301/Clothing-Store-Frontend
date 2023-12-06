document.addEventListener("DOMContentLoaded", function () {
  let parallaxText = document.getElementById("parallaxHitText");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition <= 2500) {
      //Изменение положения
      parallaxText.style.transform = `translateY(${Math.max(
        0,
        scrollPosition * 0.2 - 400
      )}px)`;

      //Изменение цвета
      let colorValue = Math.min(scrollPosition / 7, 255);
      parallaxText.style.color = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

      // Увеличение размера текста
      let fontSizeValue = Math.min(1.4 + scrollPosition / 1700, 5);
      parallaxText.style.fontSize = `${fontSizeValue}em`;
    }
  });
});
