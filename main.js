import fetchData from "../utils/fetchData.js";
import pronounceLetters from "./lib/pronounceLetters.js";
import prononuceWords from "./lib/pronounceWords.js";

const letters_path = "./data/alphabets";
fetchData(letters_path, (content) => {
  const alphabets = document.querySelector("#alphabets");

  const section = document.createElement("section");
  section.innerHTML = content.map((row) => printRow(row.split(" "))).join("");

  function printRow(letters) {
    return `<div class="row">${letters
      .map((letter) => printLetter(letter))
      .join("")}</div>`;
  }

  function printLetter(letter) {
    return `<span class="letter" data-letter="${letter}">${letter}</span>`;
  }

  alphabets.append(section);
});

pronounceLetters();
prononuceWords();
