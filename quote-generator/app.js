const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const tweetBtn = document.getElementById("twitter-btn");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function showLoader() {
  quoteContainer.hidden = true;
  loader.hidden = false;
}

function hideLoader() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function tweetQuote() {
  const tweetURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-Kanye`;
  window.open(tweetURL, "_blank");
}

async function getQuote() {
  showLoader();
  const apiURL = "https://api.kanye.rest/";

  const respose = await fetch(apiURL);
  const { quote } = await respose.json();

  quoteText.textContent = quote;

  hideLoader();
}

newQuoteBtn.addEventListener("click", getQuote);
tweetBtn.addEventListener("click", tweetQuote);

getQuote();
