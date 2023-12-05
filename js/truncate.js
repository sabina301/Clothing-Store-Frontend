"use strict";

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    console.log(str.slice(0, maxLength - 1) + "…");
    return str.slice(0, maxLength - 1) + "…";
  } else {
    console.log(str);
    return str;
  }
}

document.getElementById("hz").textContent = truncate(
  document.getElementById("hz").innerText,
  14
);
