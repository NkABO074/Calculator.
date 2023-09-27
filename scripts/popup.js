/**
 * @file popup.js
 * @author nkwe ahoume boris
 * handle the popup behevior.
 */


const openButton = document.getElementById("openPopup");
const closeButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

/**
 * Show the popup.
 */
function openPopup() {
  popup.style.display = "flex";
}

/**
 * Close the popup
 */
function closePopup() {
  popup.style.display = "none";
}

openButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);