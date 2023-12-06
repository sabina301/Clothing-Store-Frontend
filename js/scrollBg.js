window.addEventListener("scroll", function () {
  let scrollPositionBg = window.scrollY;

  let distanceFromTop3 =
    document.querySelector(".block2").offsetTop - window.innerHeight;
  let opacity3 =
    (scrollPositionBg - distanceFromTop3) / (window.innerHeight / 2) / 5 - 1;

  document.querySelector(".block2").style.opacity = Math.max(0, opacity3);
});
