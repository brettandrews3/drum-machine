function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  console.log(e.keyCode);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
console.log(keys);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function playClickSound(e) {
  const button = e.srcElement.name;

  console.log(e.srcElement.name);

  const audio = document.querySelector(`audio[data-key="${button}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

const buttons = Array.from(document.querySelectorAll(".kbd"));
console.log(buttons);

buttons.forEach(button => button.addEventListener("click", playClickSound));

window.addEventListener("keydown", playSound);

