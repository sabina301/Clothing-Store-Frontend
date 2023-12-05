document.addEventListener("DOMContentLoaded", function () {
  let parallaxText = document.getElementById("parallaxNewText");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition <= 890) {
      //Изменение положения
      parallaxText.style.transform = `translateY(${Math.max(
        100,
        scrollPosition * 0.7 - 350
      )}px)`;

      //Изменение цвета
      let colorValue = Math.min(scrollPosition / 4, 255);
      parallaxText.style.color = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

      // Увеличение размера текста
      let fontSizeValue = Math.min(1 + scrollPosition / 600, 4);
      parallaxText.style.fontSize = `${fontSizeValue}em`;
    }
  });
});
