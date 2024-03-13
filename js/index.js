const bookMarkButton = document.querySelector('[data-js="bookMarkButton"]');

bookMarkButton.addEventListener("click", toggleBookMarkButton);

function toggleBookMarkButton() {
  bookMarkButton.classList.toggle("card__bookMarkToggle");
}
