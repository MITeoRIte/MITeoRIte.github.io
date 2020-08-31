/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

const words = ["Computer Science student at NUS.", "nerd.", "coding beginner.", "piano noob."];
const typeEl = document.querySelector(".variabletext");
let idx = 0;
let typed = "";

const startType = (pun, index) => {
  if (index < pun.length) {
    typed += pun.charAt(index);
    typeEl.innerHTML = typed;
    index++;
    setTimeout(() => {
      startType(pun, index);
    }, 50);
  } else {
    setTimeout(() => {
      typeEl.classList.add("highlight");
    }, 1000);

    setTimeout(() => {
      typeEl.classList.remove("highlight");
      typed = "";
      typeEl.innerHTML = typed;

      idx = idx < words.length - 1 ? idx + 1 : 0;
      startType(words[idx], 0);
    }, 2500);
  }
};

startType(words[0], 0);
