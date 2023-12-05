document.addEventListener("DOMContentLoaded", function () {
  let parallaxText = document.getElementById("parallaxHitText");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    if (scrollPosition <= 1730) {
      //Изменение положения
      parallaxText.style.transform = `translateY(${Math.max(
        0,
        scrollPosition * 0.9 - 1395
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
