const remainingQuestionCharacters = document.querySelector(
  '[data-js="remainingQuestionCharacters"]'
);
const remainingAnswerCharacters = document.querySelector(
  '[data-js="remainingAnswerCharacters"]'
);

const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const tagInput = document.querySelector('[data-js="tagInput"]');
const form = document.querySelector('[data-js="form"]');

questionInput.addEventListener("input", (event) => {
  remainingQuestionCharacters.innerText = calcRemainingCharacters(event);
});
answerInput.addEventListener("input", (event) => {
  remainingAnswerCharacters.innerText = calcRemainingCharacters(event);
});

function calcRemainingCharacters(event) {
  return (leftCharacters = 150 - event.target.value.length);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  createNewCard(data.question, data.answer, data.tag);
  event.target.reset();
});

function createNewCard(question, answer, tags) {
  const sectionQuestCard = document.createElement("section");
  sectionQuestCard.classList.add("cards");

  const buttonBookmark = document.createElement("button");
  buttonBookmark.classList.add("card__bookmark");
  buttonBookmark.textContent = "🔖";
  buttonBookmark.setAttribute("data-js", "bookMarkButton");

  const pQuestText = document.createElement("p");
  pQuestText.classList.add("question__text");
  pQuestText.innerText = questionInput;

  const showAnswerButton = document.createElement("button");
  showAnswerButton.classList.add("answer__button");
  showAnswerButton.setAttribute("data-js", "showAnswerButton");
  showAnswerButton.textContent = "Show Answer";

  const hideAnswerButton = document.createElement("button");
  hideAnswerButton.classList.add("answer__button");
  // hideAnswerButton.classList.add("button__hide");
  hideAnswerButton.setAttribute("data-js", "hideAnswerButton");
  hideAnswerButton.textContent = "Hide Answer";

  const tagList = document.createElement("ul");
  tagList.classList.add("tags");
  tagList.setAttribute("role", "list");
  tagList.setAttribute("data-js", "tagList");

  const sectionAnswerCard = document.createElement("section");
  sectionAnswerCard.classList.add("answer__cards");
  // sectionAnswerCard.classList.add("card__answer__hide");
  sectionAnswerCard.setAttribute("data-js", "answerCard");

  const answerHeadLine = document.createElement("h3");
  answerHeadLine.textContent = "Answer:";

  const answerP = document.createElement("p");
  answerP.textContent = answerInput;

  sectionQuestCard.appendChild(buttonBookmark);
  sectionQuestCard.appendChild(pQuestText);
  sectionQuestCard.appendChild(showAnswerButton);
  sectionQuestCard.appendChild(hideAnswerButton);
  sectionQuestCard.appendChild(tagList);

  sectionAnswerCard.appendChild(answerHeadLine);
  sectionAnswerCard.appendChild(answerP);

  document.body.appendChild(sectionQuestCard);
  document.body.appendChild(sectionAnswerCard);
}
