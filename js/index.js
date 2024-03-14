const bookMarkButton = document.querySelector('[data-js="bookMarkButton"]');
const answerButton = document.querySelector('[data-js="showAnswerButton"]');
const answerCard = document.querySelector('[data-js="answerCard"]');
const hideAnswerButton = document.querySelector('[data-js="hideAnswerButton"]');

bookMarkButton.addEventListener("click", toggleBookMarkButton);

function toggleBookMarkButton() {
  bookMarkButton.classList.toggle("card__bookMarkToggle");
}

answerButton.addEventListener("click", showAnswer);

function showAnswer() {
  answerCard.classList.remove("card__answer__hide");
  hideAnswerButton.classList.remove("button__hide");
  answerButton.classList.add("button__hide");
}

hideAnswerButton.addEventListener("click", hideAnswer);

function hideAnswer() {
  answerCard.classList.add("card__answer__hide");
  hideAnswerButton.classList.add("button__hide");
  answerButton.classList.remove("button__hide");
}
