const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-conter");
let remainingCoutn = document.getElementById("remaining-counter");
let Wordsconter = document.getElementById("Words-conter");

let userChar = 0;

// to update the character on screen
const updateCounter = () => {
  text = charval.value;

  // count text
  userChar = text.length;
  totalCount.innerText = userChar;
  remainingCoutn.innerText = 150 - userChar;

  // count Words
  const trimmedString = text.trim();
  const wordsArray = trimmedString.split(" ");
  const wordCount = wordsArray.length;

  Wordsconter.innerHTML = wordCount;
};

charval.addEventListener("keyup", () => updateCounter());

// to copy the text
const copyText = () => {
  charval.select();
  charval.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(charval.value);
};
