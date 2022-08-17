const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
speedEl.value = 1;
const text = "I Love Programming!    ";
let idx = 1;
let speed = 300 / speedEl.value;

speedEl.addEventListener("change", (e) => (speed = 300 / e.target.value));

function writeText() {
  textEl.innerText = text.slice(0, idx++);
  if (idx > text.length) idx = 1;
  setTimeout(writeText, speed);
}

writeText();
