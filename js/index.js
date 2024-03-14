const bookMarkButton = document.querySelector('[data-js="bookMarkButton"]');
const answerButton = document.querySelector('[data-js="showAnswerButton"]');
const answerCard = document.querySelector('[data-js="answerCard"]');
const hideAnswerButton = document.querySelector('[data-js="hideAnswerButton"]');

const remainingQuestionCharacters = document.querySelector(
  '[data-js="remainingQuestionCharacters"]'
);
const remainingAnswerCharacters = document.querySelector(
  '[data-js="remainingAnswerCharacters"]'
);
const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');

questionInput.addEventListener("input", (event) => {
  remainingQuestionCharacters.innerText = calcRemainingCharacters(event);
});
answerInput.addEventListener("input", (event) => {
  remainingAnswerCharacters.innerText = calcRemainingCharacters(event);
});

function calcRemainingCharacters(event) {
  return (leftCharacters = 150 - event.target.value.length);
}

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
