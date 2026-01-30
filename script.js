"use strict";
const btnShare = document.getElementById("button");
const shareBox = document.querySelector(".share-box");

// Events
btnShare.addEventListener("click", (e) => {
  e.preventDefault();
  shareBox.classList.toggle("active");
});
