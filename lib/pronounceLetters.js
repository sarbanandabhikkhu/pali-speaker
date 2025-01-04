function pronounceLetters() {
  const sound_path = "./sounds/bn/";
  const sound_extension = ".wav";

  const _click = document.querySelector("#_click");
  const _hover = document.querySelector("#_hover");
  const pronounce = document.querySelector("#pronouce");

  document.addEventListener("click", (e) => {
    const letter = e.target.getAttribute("data-letter");
    if (letter && _click.checked) pronounceLetter(letter);
  });

  document.addEventListener("mouseover", (e) => {
    const letter = e.target.getAttribute("data-letter");
    if (letter && _hover.checked)
      setTimeout(() => pronounceLetter(letter), 500);
  });

  function pronounceLetter(letter) {
    let src = sound_path + letter + sound_extension;

    // if (letter === "ক" || letter === "গ") {
    //   const double = `${letter}-${letter}্${letter}`;
    //   src = sound_path + double + sound_extension;
    // }

    pronounce.src = src;
    pronounce.type = "audio/wav";
    pronounce.volume = 0.9;
    pronounce.play();
  }
}

export default pronounceLetters;
