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
