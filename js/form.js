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

// beispiel:
// const article = document.createElement("article");
// article.classList.add("post");

// const p = document.createElement("p");
// p.classList.add("post__content");
// p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

// const footer = document.createElement("footer");
// footer.classList.add("post__footer");

// const span = document.createElement("span");
// span.classList.add("post__username");
// span.textContent = "@username";

// const button = document.createElement("button");
// button.classList.add("post__button");
// button.setAttribute("daja-js", "like-button");
// button.textContent = "♥ Like";

// document.body.append(article);
// article.append(p, footer);
// footer.append(span, button);

const formData = new FormData(event.target);
const data = Object.fromEntries(formData);

createNewCard(data.question, data.answer, data.tag);
formData.addEventListener("submit", (event) => {
  event.preventDefault();
});

function createNewCard() {
  const section = document.createElement("section");
  section.classList.add("cards");

  const buttonBookmark = document.createElement("button");
  button.classList.add("card__bookmark");

  const p = document.createElement("p");
  p.classList.add("question__text");
  p.textContent = "new question";
  const button = document;
}
// die cards weiter nchbauen mit js siehe index.html
