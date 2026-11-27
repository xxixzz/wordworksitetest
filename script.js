const cards = [
  {
    clue: "To meet someone by chance",
    phrase: "Run into",
    example: "I ran into Maya at the station."
  },
  {
    clue: "To postpone something until later",
    phrase: "Put off",
    example: "We put off the picnic until Saturday."
  },
  {
    clue: "To solve a problem or understand something",
    phrase: "Figure out",
    example: "I finally figured out how to open the lock."
  }
];

const count = document.querySelector("#drill-count");
const clue = document.querySelector("#drill-clue");
const answer = document.querySelector("#drill-answer");
const button = document.querySelector("#drill-button");
let currentCard = 0;
let revealed = false;

button.hidden = false;
button.addEventListener("click", () => {
  if (!revealed) {
    const card = cards[currentCard];
    const phrase = document.createElement("strong");
    phrase.textContent = card.phrase;
    answer.replaceChildren(phrase, ` — ${card.example}`);
    button.textContent = currentCard === cards.length - 1 ? "Start again" : "Next card";
    revealed = true;
    return;
  }

  currentCard = (currentCard + 1) % cards.length;
  count.textContent = `Card ${currentCard + 1} of ${cards.length}`;
  clue.textContent = cards[currentCard].clue;
  answer.replaceChildren();
  button.textContent = "Show answer";
  revealed = false;
  clue.focus({ preventScroll: true });
});
