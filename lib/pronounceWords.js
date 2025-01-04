function prononuceWords() {
  const word = document.querySelector("#write_word");
  const word_pronounce = document.querySelector("#word_pronounce");
  const track = document.querySelector("#track");
  const sounds_path = "./sounds/bn/words/";

  let text;
  let sounds;
  let complete = 0;
  let currentTime = 0;
  let duration = 0;

  fetch("../data/words")
    .then((res) => res.text())
    .then((data) => {
      text = data.split(/\r\n|\s/g);
      // console.log(text);
    });

  track.src = "";
  track.type = "audio/wav";
  track.mediaGroup = "test";
  track.volume = 0.9;
  track.defaultPlaybackRate = 1;
  track.ontimeupdate = onTimeUpdate;
  track.onerror = onTimeUpdate;
  // track.loop = true;
  // track.ended;
  // track.seeking;
  // track.textTracks;
  // track.play();
  // track.pause();

  function onTimeUpdate(e) {
    currentTime = track.currentTime;
    duration = track.duration;

    if (e.type === "error") {
      word.value = "ভগৰা";
    }

    if (!isNaN(duration)) {
      word.value = sounds[complete];
    }

    if (track.ended) {
      complete++;

      if (complete === sounds.length) {
        complete = 0;
        word.value = "";
        // word.value = text.join(" ");
      } else pronouncer(sounds[complete]);
    }
  }

  word_pronounce.addEventListener("click", (e) => {
    sounds = word.value.split(" ");
    pronouncer(sounds[0]);
  });

  function pronouncer(word) {
    // console.log(word.match(/(দ্|ধো|বু|ম্|মা|স)/g));
    // snds.forEach((s, i) => {
    //   console.log(word.match(s));
    // });
    if (!word) track.src = `${sounds_path + word}অরহং.wav`;
    else track.src = `${sounds_path + word}.wav`;
    track.play();
  }

  function timeUpdate(curTime, duration) {
    return `${Math.floor(curTime)} / ${Math.floor(duration)}`;
  }
}

export default prononuceWords;
