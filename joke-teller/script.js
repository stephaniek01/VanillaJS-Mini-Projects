const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

const JOKE_API_URL =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const voiceAPIDefaultParams = {
  key: config.TEXT_TO_SPEECH_API_KEY,
  hl: "en-us",
  v: "Linda",
  r: 0,
  c: "mp3",
  f: "44khz_16bit_stereo",
  ssml: false,
};

function convertToSpeech(jokeText) {
  VoiceRSS.speech({ ...voiceAPIDefaultParams, src: jokeText });
}

async function tellJoke() {
  try {
    let jokeText = "";
    const response = await fetch(JOKE_API_URL);
    const { setup, delivery, joke } = await response.json();

    if (setup) jokeText = `${setup} ................... ${delivery}`;
    else jokeText = joke;

    convertToSpeech(jokeText);
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  tellJoke();
  button.disabled = true;
});

audioElement.addEventListener("ended", () => {
  button.disabled = false;
});
